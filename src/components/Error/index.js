import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './index.module.scss'


const Error = ({className, ...rest}) => {
  return <div className={clsx(styles.Error, className)} {...rest} />
}


Error.propTypes = {
  className: PropTypes.string,
}

Error.displayName = 'Error'


export default Error
