import React, {lazy} from 'react'
import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'

import LoadableRoute from 'utils/LoadableRoute'
import PublicLayout from 'layouts/PublicLayout'

const Home = lazy(() => import(/* webpackChunkName: "Home" */ '../pages/Home'))
const Person = lazy(() => import(/* webpackChunkName: "Person" */ '../pages/Person'))
const PersonForm = lazy(() => import(/* webpackChunkName: "PersonForm" */ '../pages/PersonForm'))
const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */ '../pages/NotFound'))

const AppRouter = () => {
  /**
   * Normally our App will be served in http://localhost:3000/app
   * so that's where `basename='/app'` comes from
   */
  return (
    <Router basename='/app'>
      <Switch>
        <Redirect exact from='/' to='/home' />

        <LoadableRoute path='/home' component={Home} layout={PublicLayout} />

        <LoadableRoute path='/person' component={Person} layout={PublicLayout} />

        <LoadableRoute path='/person-form' component={PersonForm} layout={PublicLayout} />

        <LoadableRoute component={NotFound} layout={PublicLayout} />
      </Switch>
    </Router>
  )
}

export default AppRouter
