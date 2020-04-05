import React, {useCallback, useMemo} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import Grid from '@material-ui/core/Grid'
import {PersonCard, Button, Error} from 'components'

import {
  REQUEST_STATUS_LOADING,
  REQUEST_STATUS_ERROR,
} from 'slices/constants'
import personsSlice from 'slices/persons'

import styles from './index.module.scss'


const Person = () => {
  const personResponse = useSelector(({personsSlice}) => personsSlice?.person)
  const {status, errorMessage} = useSelector(({personsSlice}) => personsSlice?.personRequest)

  const person = useMemo(() => {
    return status === REQUEST_STATUS_ERROR ? {} : personResponse
  }, [personResponse, status])

  const isLoading = useMemo(() => {
    return status === REQUEST_STATUS_LOADING
  }, [status])

  const dispatch = useDispatch()
  const fetchPersonById = useCallback(id => () => {
    dispatch(personsSlice.actions.fetchPersonById(id))
  }, [dispatch])


  return (
    <>
      <h1>Person</h1>

      <PersonCard
        person={person}
        isLoading={isLoading}
      />

      <Grid container spacing={3} className={styles.GridContainer}>
        <Grid item xs={12}>
          {errorMessage && <Error>{errorMessage}</Error>}
        </Grid>

        <Grid item xs={4}>
          <Button
            onClick={fetchPersonById(1)}
            isLoading={isLoading}
            disabled={isLoading}
          >
            Luke
          </Button>
        </Grid>

        <Grid item xs={4}>
          <Button
            onClick={fetchPersonById(5)}
            isLoading={isLoading}
            disabled={isLoading}
          >
            Lea
          </Button>
        </Grid>

        <Grid item xs={4}>
          <Button
            color='secondary'
            onClick={fetchPersonById(100)}
            isLoading={isLoading}
            disabled={isLoading}
          >
            Test Error
          </Button>
        </Grid>
      </Grid>
    </>
  )
}


export default Person
