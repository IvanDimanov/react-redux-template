import {combineReducers} from 'redux'

import users from './users'

const slices = [users]

export default combineReducers(
  slices.reduce(
    (map, {name, reducer}) => ({
      ...map,
      [name]: reducer,
    }),
    {}
  )
)
