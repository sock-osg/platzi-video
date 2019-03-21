import { Map as map } from 'immutable'

import * as actionTypes from './../constants/actionTypes'

const initialState = map({
  active: false
})

function isLoading(state = initialState, action) {
  switch (action.type) {
    case actionTypes.IS_LOADING: {
      return state.set('active', action.payload.value)
    }
    default:
      return state;
  }
}

export default isLoading
