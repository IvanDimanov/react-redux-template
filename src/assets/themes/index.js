import {createMuiTheme} from '@material-ui/core/styles'

import {
  defaultFontFamily,
  defaultFontSize,
  darkBlue,
  lightBlue,
  royalBlue,
  chenin,
  mustard,
  jarrah,
} from 'assets/styles/main.module.scss'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: darkBlue,
      dark: royalBlue,
    },
    action: {
      disabledBackground: royalBlue,
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
        color: lightBlue,
        textTransform: 'capitalize',

        '&:hover': {
          backgroundColor: royalBlue,
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
