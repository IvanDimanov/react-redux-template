import {combineReducers} from 'redux'

import persons from './persons'

const slices = [persons]

export default combineReducers(
  slices.reduce(
    (map, {name, reducer}) => ({
      ...map,
      [name]: reducer,
    }),
    {}
  )
)
