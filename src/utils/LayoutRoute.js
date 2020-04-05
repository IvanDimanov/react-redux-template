import React from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'

const LayoutRoute = ({layout: Layout, component: Component, ...options}) => (
  <Route
    {...options}
    component={() => (
      <Layout>
        <Component />
      </Layout>
    )}
  />
)

LayoutRoute.propTypes = {
  layout: PropTypes.element,
  component: PropTypes.element.isRequired,
}

export default LayoutRoute
