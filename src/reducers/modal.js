import { fromJS } from 'immutable'

import * as actionTypes from './../constants/actionTypes'

const initialState = fromJS({
	visibility: false,
	mediaId: null,
})

//function modal(state = { visibility: false, mediaId: null }, action) {
function modal(state = initialState, action) {
	switch(action.type) {
		case actionTypes.OPEN_MODAL: {
      return state.merge({
				visibility: true,
				mediaId: action.payload.mediaId,
			})
		}
    case actionTypes.CLOSE_MODAL: {
      return state.set('visibility', false)
    }
		default:
			return state
	}
}

export default modal
