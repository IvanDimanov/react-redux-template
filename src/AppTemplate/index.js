import React from 'react'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'

import Header from './Header'

const styles = (theme) => ({
  main: theme.typography.body1
})

const Layout = ({ children, classes, counter, increment }) => <div className={classes.main}>
  <Header />

<button onClick={increment}>Increment</button>
<h3>{counter}</h3>

  {children}
</div>

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoad: () => {},
  onUnload: () => {},

  increment: () => dispatch({ type: 'INCREMENT' })
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Layout))
