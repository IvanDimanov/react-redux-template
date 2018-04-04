import { put, takeEvery } from 'redux-saga/effects'
import request from '../utils/request'

import {
  SEARCH_USERS,
  SEARCH_USER_REPOS
} from './constants'

import {
  setSearchLoading,
  setUsers,
  setUserRepos
} from './actions'

export function * searchUsers ({ searchName }) {
  try {
    yield put(setSearchLoading(true))

    const { data: {items = []} } = yield request(`https://api.github.com/search/users?q=${searchName}`)

    yield put(setUsers(items))
    yield put(setUserRepos([]))
    yield put(setSearchLoading(false))
  } catch (error) {
    console.error(error)
  }
}

export function * watchSearchUsers () {
  yield takeEvery(SEARCH_USERS, searchUsers)
}

export function * searchUserRepos ({ userName }) {
  try {
    yield put(setSearchLoading(true))

    const { data: repos } = yield request(`https://api.github.com/users/${userName}/repos`)

    yield put(setUserRepos(repos || []))
    yield put(setSearchLoading(false))
  } catch (error) {
    console.error(error)
  }
}

export function * watchSearchUserRepos () {
  yield takeEvery(SEARCH_USER_REPOS, searchUserRepos)
}

export default [
  watchSearchUsers(),
  watchSearchUserRepos()
]
