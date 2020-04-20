import React, {useCallback, useMemo} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import Grid from '@material-ui/core/Grid'
import {UserCard, Button, Error} from 'components'

import {
  REQUEST_STATUS_LOADING,
  REQUEST_STATUS_ERROR,
} from 'slices/constants'
import usersSlice from 'slices/users'

import styles from './index.module.scss'


const User = () => {
  const userResponse = useSelector(({usersSlice}) => usersSlice?.user)
  const {status, errorMessage} = useSelector(({usersSlice}) => usersSlice?.userRequest)

  const user = useMemo(() => {
    return status === REQUEST_STATUS_ERROR ? {} : userResponse
  }, [userResponse, status])

  const isLoading = useMemo(() => {
    return status === REQUEST_STATUS_LOADING
  }, [status])

  const dispatch = useDispatch()
  const fetchUserBySearchName = useCallback(name => () => {
    dispatch(usersSlice.actions.fetchUserBySearchName(name))
  }, [dispatch])


  return (
    <>
      <h1>User</h1>

      <UserCard
        user={user}
        isLoading={isLoading}
      />

      <br />

      <Grid
        container
        spacing={0}
        justify='space-between'
        className={styles.GridContainer}
      >
        <Grid item xs={12}>
          {errorMessage && <Error>{errorMessage}</Error>}
          <br />
        </Grid>

        <Button
          className={styles.Button}
          onClick={fetchUserBySearchName('john')}
          isLoading={isLoading}
          disabled={isLoading}
        >
          John
        </Button>

        <Button
          className={styles.Button}
          onClick={fetchUserBySearchName('jane')}
          isLoading={isLoading}
          disabled={isLoading}
        >
          Jane
        </Button>


        <Button
          className={styles.Button}
          color='secondary'
          onClick={fetchUserBySearchName('-unknown-user-')}
          isLoading={isLoading}
          disabled={isLoading}
        >
          Test Error
        </Button>

      </Grid>
    </>
  )
}


export default User
