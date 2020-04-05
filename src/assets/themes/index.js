import {createMuiTheme} from '@material-ui/core/styles'

import {
  defaultFontFamily,
  defaultFontSize,
  darkBlue,
  lightBlue,
  chenin,
  mustard,
  jarrah,
} from 'assets/styles/main.module.scss'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: darkBlue,
      dark: lightBlue,
    },
    action: {
      disabledBackground: lightBlue,
    },
  },

  typography: {
    fontFamily: defaultFontFamily,
    fontSize: parseInt(defaultFontSize.replace('px', '')),
  },

  overrides: {
    MuiButton: {
      root: {
        backgroundColor: darkBlue,
        '&:hover': {
          backgroundColor: lightBlue,
        },

        '&.Mui-disabled': {
          backgroundColor: lightBlue,
        },
      },

      textSecondary: {
        color: chenin,
        backgroundColor: mustard,
        '&:hover': {
          backgroundColor: jarrah,
        },
      },
    },
  },
})

export default theme
