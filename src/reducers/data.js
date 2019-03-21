// Vendor
import { fromJS } from 'immutable'

import mockDataNormalized from '../schemas'
import * as actionTypes from './../constants/actionTypes'

const initialState = fromJS({
	entities: mockDataNormalized.entities,
	categories: mockDataNormalized.result.categories,
	query: '',
	results: [],
})

function data(state = initialState, action) {
	switch(action.type) {
		case actionTypes.SEARCH_ENTITIES: {
			// const list = state.data.categories[2].playlist
			// const results = list.filter((item) => { return item.author.includes(action.payload.query) })
			//
			// return {
			// 	...state,
			// 	results
			// }
			return state.set('query', action.payload.query)
		}
		default:
			return state
	}
}

export default data
