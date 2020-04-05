import {createSlice} from '@reduxjs/toolkit'

import personsApi from 'api/persons'

import {REQUEST_STATUS_INITIAL, REQUEST_STATUS_LOADING, REQUEST_STATUS_LOADED, REQUEST_STATUS_ERROR} from './constants'

const VALID_REQUEST_STATUSES = [REQUEST_STATUS_INITIAL, REQUEST_STATUS_LOADING, REQUEST_STATUS_LOADED, REQUEST_STATUS_ERROR]

const initialState = {
  person: {},
  personRequest: {
    status: REQUEST_STATUS_INITIAL,
    errorMessage: '',
  },
}

const personsSlice = createSlice({
  name: 'personsSlice',
  initialState,
  reducers: {
    setPersonRequestStatus(state, {payload: status}) {
      if (!VALID_REQUEST_STATUSES.includes(status)) {
        throw new RangeError(`Status "${status}" is not from the valid statuses: "${VALID_REQUEST_STATUSES.join('", "')}"`)
      }
      state.personRequest.status = status
    },

    setPersonRequestErrorMessage(state, {payload: errorMessage}) {
      errorMessage = String(errorMessage || '')
      state.personRequest.errorMessage = errorMessage
      if (errorMessage) {
        state.personRequest.status = REQUEST_STATUS_ERROR
      }
    },

    setPerson(state, {payload: person}) {
      state.person = person && typeof person ? person : {}
      state.personRequest.status = REQUEST_STATUS_LOADED
    },

    resetPerson(state) {
      state.person = initialState.person
      state.personRequest = initialState.personRequest
    },
  },
})

const fetchPersonById = id => async dispatch => {
  dispatch(personsSlice.actions.setPersonRequestStatus(REQUEST_STATUS_LOADING))
  dispatch(personsSlice.actions.setPersonRequestErrorMessage(''))

  try {
    const person = await personsApi.fetchPersonById(id)

    /* Fetch all the species that are related to the Person */
    const speciesIds = person.species
      .map(url => url.match(/(\d+)\/$/))
      .filter(Boolean)
      .map(matches => matches[1])
    const fetchedSpecies = await Promise.all(speciesIds.map(personsApi.fetchSpeciesById))

    person.fetchedSpecies = fetchedSpecies

    dispatch(personsSlice.actions.setPerson(person))
  } catch (error) {
    dispatch(personsSlice.actions.setPersonRequestErrorMessage(error.errorMessage || error.message))
  }
}

export default {
  ...personsSlice,

  actions: {
    fetchPersonById,
    resetPerson: personsSlice.actions.resetPerson,
  },
}
