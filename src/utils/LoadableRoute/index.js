import React, {Suspense} from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'

import ErrorBoundary from './ErrorBoundary'
import DelayedFallback from './DelayedFallback'

const EmptyLayout = ({children}) => <>{children}</>

EmptyLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

/**
 * This wrapper helps with lazy loading of page,
 * encapsulates errors, adds optional Page Layout,
 * and show a Loading component within a respectful delay.
 *
 * @param {object} props
 * @return {object} React component
 */
const LoadableRoute = ({
  component: Component,
  routeComponent: RouteComponent,
  layout: Layout,
  ...options
}) => {
  const PageComponent = () => (
    <ErrorBoundary>
      <Layout {...options}>
        <ErrorBoundary>
          <Suspense fallback={<DelayedFallback />}>
            <Component />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </ErrorBoundary>
  )

  return <RouteComponent {...options} component={PageComponent} />
}

LoadableRoute.propTypes = {
  component: PropTypes.object.isRequired,
  routeComponent: PropTypes.func,
  layout: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]),
}

LoadableRoute.defaultProps = {
  routeComponent: Route,
  layout: EmptyLayout,
}

export default LoadableRoute
