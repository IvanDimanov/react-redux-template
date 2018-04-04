import { all } from 'redux-saga/effects'

/* Sagas that are not related to any specific module */
import common from './common'

/* Holding all loaded sagas */
const cache = {}

function importAll (requires) {
  requires.keys().forEach((key) => (cache[key] = requires(key)))
}

/* Load and cache all sagas from all folders (and sub folders) in folder './src' */
importAll(require.context('../../', true, /sagas\.js$/))

/* Combine all sagas into one object */
let sagas = [ ...common ]
Object.keys(cache).forEach((key) => sagas.push(...cache[key].default))

export default function * () {
  yield all(sagas)
}
