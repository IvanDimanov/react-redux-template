import React from 'react'
import ReactDOM from 'react-dom'

import App from 'App'
import * as serviceWorker from 'serviceWorker'

import whyDidYouRender from '@welldone-software/why-did-you-render'

if (process.env.REACT_APP_TRACK_RENDERS === 'true') {
  /**
   * Gives a helping info in the console why a certain component re-renders
   * https://github.com/welldone-software/why-did-you-render#why-did-you-render
   */
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  })
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
