import { fromJS } from 'immutable'

import {
  SET_USERS,
  SET_USER_REPOS,
  SET_SEARCH_LOADING
} from './constants'

const initialState = fromJS({
  users: [],
  userRepos: [],
  isSearchLoading: false
})

export default {
  domain: 'avatar',
  reducer (state = initialState, action) {
    switch (action.type) {
      case SET_USERS:
        return state
          .set('users', fromJS(action.users))

      case SET_USER_REPOS:
        return state
          .set('userRepos', fromJS(action.userRepos))

      case SET_SEARCH_LOADING:
        return state
          .set('isSearchLoading', Boolean(action.isSearchLoading))

      default:
        return state
    }
  }
}
