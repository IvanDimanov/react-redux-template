import React, {memo} from 'react'
import PropTypes from 'prop-types'

import MuiButton from '@material-ui/core/Button'

import {Spinner} from 'components'


const Button = ({children, isLoading, ...rest}) => (
  <MuiButton {...rest}>
    {isLoading && <Spinner size={50} />}
    {children}
  </MuiButton>
)


Button.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
}

Button.defaultProps = {
  children: 'Button',
  isLoading: false,
}

Button.displayName = 'Button'


export default memo(Button)
