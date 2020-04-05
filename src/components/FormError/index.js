import React from 'react'
import PropTypes from 'prop-types'

import Error from 'components/Error'


const FormError = ({error, minLength, maxLength}) => {
  if (!error) {
    return null
  }

  if (error.message) {
    return <Error>{error.message}</Error>
  }

  if (error.type === 'required') {
    return <Error>This field is required</Error>
  }

  if (error.type === 'minLength') {
    return (
      <Error>
        This field has a minimum length restriction of <b>{minLength}</b>
      </Error>
    )
  }

  if (error.type === 'maxLength') {
    return (
      <Error>
        This field has a maximum length restriction of <b>{maxLength}</b>
      </Error>
    )
  }
}


FormError.propTypes = {
  error: PropTypes.object,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
}

FormError.displayName = 'FormError'


export default FormError
