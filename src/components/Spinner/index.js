import React, {memo} from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import spinner from 'assets/images/spinner.svg'

import styles from './index.module.scss'


const Spinner = ({full, alt, className, size}) => (
  <img
    alt={alt}
    src={spinner}
    width={size}
    className={clsx(className, full && styles.Full)}
  />
)


Spinner.propTypes = {
  full: PropTypes.bool,
  alt: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
}

Spinner.defaultProps = {
  full: false,
  alt: 'Loading ...',
  className: '',
  size: 150,
}

Spinner.displayName = 'Spinner'


export default memo(Spinner)
