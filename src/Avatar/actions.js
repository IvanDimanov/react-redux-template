import {
  SEARCH_USERS,
  SET_USERS,

  SEARCH_USER_REPOS,
  SET_USER_REPOS,

  SET_SEARCH_LOADING
} from './constants'

export const searchUsers = (searchName) => ({ type: SEARCH_USERS, searchName })
export const setUsers = (users) => ({ type: SET_USERS, users })

export const searchUserRepos = (userName) => ({ type: SEARCH_USER_REPOS, userName })
export const setUserRepos = (userRepos) => ({ type: SET_USER_REPOS, userRepos })

export const setSearchLoading = (isSearchLoading) => ({ type: SET_SEARCH_LOADING, isSearchLoading })
