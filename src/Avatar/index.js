import { connect } from 'react-redux'

import {
  setAvatar
} from '../AppTemplate/actions'

import {
  selectUsers,
  selectUserRepos,
  selectSearchLoading
} from './selectors'

import {
  searchUsers,
  searchUserRepos
} from './actions'

import Page from './page'

const mapStateToProps = (state) => ({
  users: selectUsers(state),
  userRepos: selectUserRepos(state),
  isSearchLoading: selectSearchLoading(state)
})

const mapDispatchToProps = (dispatch) => ({
  setAvatar: (avatar) => dispatch(setAvatar(avatar)),
  searchUsers: (searchName) => dispatch(searchUsers(searchName)),
  searchUserRepos: (userName) => dispatch(searchUserRepos(userName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
