import { connect } from 'react-redux'

import {
  selectAvatar
} from '../selectors'

import {
  logOut
} from '../actions'

import Page from './page'

const mapStateToProps = (state) => ({
  avatar: selectAvatar(state)
})

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
