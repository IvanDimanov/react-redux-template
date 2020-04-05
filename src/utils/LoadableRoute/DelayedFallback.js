import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import {Spinner} from 'components'

/**
 * Delays the Loading message so we do not only flash before quickly rendering the content.
 *
 * Credit goes to
 *    https://stackoverflow.com/a/58971161
 *
 * @param {object} props List of Component props:
 *   {number} [optional] `minDelay` defaults to 300 milliseconds - How much time to wait before showing a Loading message
 * @return {object} Loading React component
 */
const DelayedFallback = ({minDelay = 300}) => {
  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoading(true), minDelay)
    return () => clearTimeout(timeout)
  }, [minDelay])

  return showLoading ? <Spinner full /> : null
}

DelayedFallback.propTypes = {
  minDelay: PropTypes.number,
}

export default DelayedFallback
