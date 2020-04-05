import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'

import reducer from 'slices'

import {ThemeProvider, CssBaseline} from '@material-ui/core'
import theme from 'assets/themes'

import 'assets/styles/main.module.scss'

import AppRouter from './AppRouter'

const store = configureStore({reducer})

const App = () => {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </ThemeProvider>
    </CssBaseline>
  )
}

export default App
