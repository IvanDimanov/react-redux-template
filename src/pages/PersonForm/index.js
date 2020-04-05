import React, {useCallback, useMemo} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {PersonCard, Error} from 'components'
import {PersonForm} from 'forms'

import {
  REQUEST_STATUS_LOADING,
  REQUEST_STATUS_ERROR,
} from 'slices/constants'
import personsSlice from 'slices/persons'

import styles from './index.module.scss'


const PersonFormPage = () => {
  const personResponse = useSelector(({personsSlice}) => personsSlice?.person)
  const {status, errorMessage} = useSelector(({personsSlice}) => personsSlice?.personRequest)

  const person = useMemo(() => {
    return status === REQUEST_STATUS_ERROR ? {} : personResponse
  }, [personResponse, status])

  const isLoading = useMemo(() => {
    return status === REQUEST_STATUS_LOADING
  }, [status])

  const dispatch = useDispatch()
  const fetchPersonById = useCallback(({id}) => {
    dispatch(personsSlice.actions.fetchPersonById(id))
  }, [dispatch])


  return (
    <>
      <h1>Person</h1>

      <PersonCard
        person={person}
        isLoading={isLoading}
      />

      <br />
      {errorMessage && <Error className={styles.Error}>{errorMessage}</Error>}

      <PersonForm
        className={styles.Form}
        onSubmit={fetchPersonById}
        isLoading={isLoading}
      />
    </>
  )
}


export default PersonFormPage
