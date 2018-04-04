import { fromJS } from 'immutable'

import {
  SET_AVATAR,
  LOG_OUT
} from '../constants'

const initialState = fromJS({
  avatar: {}
})

export default {
  domain: 'common',
  reducer (state = initialState, action) {
    switch (action.type) {
      case SET_AVATAR:
        return state
          .set('avatar', fromJS(action.avatar))

      case LOG_OUT:
        return state
          .set('avatar', initialState.get('avatar'))

      default:
        return state
    }
  }
}
