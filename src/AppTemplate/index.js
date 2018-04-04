import React from 'react'
import { withStyles } from 'material-ui/styles'

import Header from './Header'

const styles = (theme) => ({
  main: theme.typography.body1
})

const Layout = ({ children, classes, counter, increment }) => (
  <div className={classes.main}>
    <Header />
    {children}
  </div>
)

export default withStyles(styles)(Layout)
