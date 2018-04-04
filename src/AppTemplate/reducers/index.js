/* Reducers that are not related to any specific module */
import common from './common'

/* Holding all loaded reducers */
const cache = {}

function importAll (requires) {
  requires.keys().forEach((key) => (cache[key] = requires(key)))
}

/* Load and cache all reducers from all folders (and sub folders) in folder './src' */
importAll(require.context('../../', true, /reducers\.js$/))

/* Combine all reducers into one object */
let reducers = {
  [common.domain]: common.reducer
}
let commonState = {
  [common.domain]: undefined
}

Object.keys(cache).forEach((key) => {
  const { domain, reducer } = cache[key].default
  reducers[domain] = reducer
  commonState[domain] = undefined
})

export default function (state = commonState, action) {
  const newState = {}
  Object.keys(state).forEach((domain) => {
    newState[domain] = reducers[domain](state[domain], action)
  })
  return newState
}
