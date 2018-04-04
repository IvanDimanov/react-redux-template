import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { HashRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import AsyncComponent from './utils/AsyncComponent'
import AppTemplate from './AppTemplate'

import sagas from './AppTemplate/sagas'
import reducers from './AppTemplate/reducers'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(sagas)

const Home = () => import(/* webpackChunkName: "Home" */ './Home')
const Avatar = () => import(/* webpackChunkName: "Avatar" */ './Avatar')

render(
  <Provider store={store}>
    <Router>
      <AppTemplate>
        <Route exact path='/' component={() => <AsyncComponent moduleProvider={Home} />} />
        <Route exact path='/avatar' component={() => <AsyncComponent moduleProvider={Avatar} />} />
      </AppTemplate>
    </Router>
  </Provider>,
  document.getElementById('app')
)
