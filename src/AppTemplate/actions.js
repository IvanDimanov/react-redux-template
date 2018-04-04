import {
  SET_AVATAR,
  LOG_OUT
} from './constants'

export const setAvatar = (avatar) => ({ type: SET_AVATAR, avatar })
export const logOut = (avatar) => ({ type: LOG_OUT })
