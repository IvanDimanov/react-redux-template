import {createSlice} from '@reduxjs/toolkit'

import usersApi from 'api/users'
import reposApi from 'api/repos'

import {REQUEST_STATUS_INITIAL, REQUEST_STATUS_LOADING, REQUEST_STATUS_LOADED, REQUEST_STATUS_ERROR} from './constants'

const VALID_REQUEST_STATUSES = [REQUEST_STATUS_INITIAL, REQUEST_STATUS_LOADING, REQUEST_STATUS_LOADED, REQUEST_STATUS_ERROR]

const initialState = {
  user: {
    repos: [],
  },
  userRequest: {
    status: REQUEST_STATUS_INITIAL,
    errorMessage: '',
  },
}

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    setUserRequestStatus(state, {payload: status}) {
      if (!VALID_REQUEST_STATUSES.includes(status)) {
        throw new RangeError(`Status "${status}" is not from the valid statuses: "${VALID_REQUEST_STATUSES.join('", "')}"`)
      }
      state.userRequest.status = status
    },

    setUserRequestErrorMessage(state, {payload: errorMessage}) {
      errorMessage = String(errorMessage || '')
      state.userRequest.errorMessage = errorMessage
      if (errorMessage) {
        state.userRequest.status = REQUEST_STATUS_ERROR
      }
    },

    setUser(state, {payload: user}) {
      state.user = user && typeof user === 'object' ? user : initialState.user
      state.userRequest.status = REQUEST_STATUS_LOADED
    },

    resetUser(state) {
      state.user = initialState.user
      state.userRequest = initialState.userRequest
    },
  },
})


const {
  setUser,
  setUserRequestStatus,
  setUserRequestErrorMessage,
  resetUser,
} = usersSlice.actions


const fetchUserBySearchName = searchName => async dispatch => {
  dispatch(setUserRequestStatus(REQUEST_STATUS_LOADING))
  dispatch(setUserRequestErrorMessage(''))

  try {
    const {items = []} = await usersApi.fetchUserBySearchName(searchName)

    const user = items[0]
    if (!user) {
      throw new ReferenceError(`Unable to find user with name: ${searchName}`)
    }

    const repos = await reposApi.fetchReposByUserName(user.login)

    user.repos = repos
      .map(repo => {
        /* eslint-disable-next-line camelcase */
        repo.score = (repo?.forks_count ?? 0) + (repo?.watchers_count ?? 0)
        return repo
      })
      .sort((repo1, repo2) => repo1.score - repo2.score)

    dispatch(setUser(user))
  } catch (error) {
    dispatch(setUserRequestErrorMessage(error.errorMessage || error.message))
  }
}


export default {
  ...usersSlice,

  actions: {
    fetchUserBySearchName,
    resetUser,
  },
}
