import React, {useCallback, useMemo} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {UserCard, Error} from 'components'
import {UserForm} from 'forms'

import {
  REQUEST_STATUS_LOADING,
  REQUEST_STATUS_ERROR,
} from 'slices/constants'
import usersSlice from 'slices/users'

import styles from './index.module.scss'


const UserFormPage = () => {
  const userResponse = useSelector(({usersSlice}) => usersSlice?.user)
  const {status, errorMessage} = useSelector(({usersSlice}) => usersSlice?.userRequest)

  const user = useMemo(() => {
    return status === REQUEST_STATUS_ERROR ? {} : userResponse
  }, [userResponse, status])

  const isLoading = useMemo(() => {
    return status === REQUEST_STATUS_LOADING
  }, [status])

  const dispatch = useDispatch()
  const fetchUserBySearchName = useCallback(({searchName}) => {
    dispatch(usersSlice.actions.fetchUserBySearchName(searchName))
  }, [dispatch])


  return (
    <>
      <h1>User</h1>

      <UserCard
        user={user}
        isLoading={isLoading}
      />

      <br />
      {errorMessage && <Error className={styles.Error}>{errorMessage}</Error>}

      <UserForm
        className={styles.Form}
        onSubmit={fetchUserBySearchName}
        isLoading={isLoading}
      />
    </>
  )
}


export default UserFormPage
