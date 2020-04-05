import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Error from 'components/Error'

/**
 * Contain all loading and execution errors that may happen to a Component.
 */
class ErrorBoundary extends Component {
  /**
   * @param {object} props Initiate this class with sent `props`
   */
  constructor(props) {
    super(props)
    this.state = {error: null}
  }

  /**
   * @param {error} error Thrown error from the child React element
   * @return {object} New component state with the thrown `error`
   */
  static getDerivedStateFromError(error) {
    return {error}
  }

  /**
   * @return {object} React element
   */
  render() {
    const {error} = this.state
    const retry = () => this.setState({error: null})

    if (error) {
      return (
        <>
          <Error>{error.message}</Error> <button onClick={retry}>Retry</button>
        </>
      )
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element,
}

export default ErrorBoundary
