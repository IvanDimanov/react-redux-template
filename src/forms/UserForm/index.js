import React, {useEffect, memo} from 'react'
import PropTypes from 'prop-types'
import isEqual from 'react-fast-compare'
import {useForm, Controller} from 'react-hook-form'
import * as yup from 'yup'

import {TextInput, Button} from 'components'

import styles from './index.module.scss'


const validationResolver = yup.object().shape({
  searchName: yup
    .string()
    .label('User name')
    .min(2)
    .max(100)
    .required(),
})

const getErrorMessage = error => {
  return (error && error.message) || ''
}


const UserForm = ({onSubmit, isLoading, defaultValues, className}) => {
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
        name='searchName'
        className={styles.TextInput}
        control={control}
        disabled={isLoading}
        error={Boolean(errors.searchName)}
        helperText={getErrorMessage(errors.searchName)}
        required
        label='User name'
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


UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  defaultValues: PropTypes.object,
  className: PropTypes.string,
}

UserForm.defaultProps = {
  isLoading: false,
  defaultValues: {searchName: 'Smith'},
  className: '',
}

UserForm.displayName = 'UserForm'


export default memo(UserForm, isEqual)

