import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import {MuiThemeProvider} from '@material-ui/core/styles'
import {StylesProvider} from '@material-ui/styles'

import Theme from '../src/assets/themes/index'

const StylesDecorator = storyFn => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <MuiThemeProvider theme={Theme}>{storyFn()}</MuiThemeProvider>
  </StylesProvider>
)

export default StylesDecorator
