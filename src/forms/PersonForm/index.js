import React, {useEffect, memo} from 'react'
import PropTypes from 'prop-types'
import isEqual from 'react-fast-compare'
import {useForm, Controller} from 'react-hook-form'
import * as yup from 'yup'

import {TextInput, Button} from 'components'

import styles from './index.module.scss'


const validationResolver = yup.object().shape({
  id: yup
    .number()
    .integer()
    .label('Person Id')
    .min(1)
    .max(100)
    .required(),
})

const getErrorMessage = error => {
  return (error && error.message) || ''
}


const PersonForm = ({onSubmit, isLoading, defaultValues, className}) => {
  const {handleSubmit, control, errors, reset} = useForm({
    defaultValues,
    validationSchema: validationResolver,
  })

  /* Clear useForm cache if defaultValues changes */
  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        as={TextInput}
        name='id'
        className={styles.TextInput}
        control={control}
        disabled={isLoading}
        error={Boolean(errors.id)}
        helperText={getErrorMessage(errors.id)}
        required
        label='Person Id'
      />
      <br />
      <br />

      <Button
        className={styles.Button}
        type='submit'
        isLoading={isLoading}
        disabled={isLoading}
      >
        Fetch
      </Button>
    </form>
  )
}


PersonForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  defaultValues: PropTypes.object,
  className: PropTypes.string,
}

PersonForm.defaultProps = {
  isLoading: false,
  defaultValues: {id: 20},
  className: '',
}

PersonForm.displayName = 'PersonForm'


export default memo(PersonForm, isEqual)

