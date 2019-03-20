// Vendor
import { fromJS } from 'immutable'

import mockDataNormalized from '../schemas'

const initialState = fromJS({
	entities: mockDataNormalized.entities,
	categories: mockDataNormalized.result.categories,
	query: '',
	results: [],
})

function data(state = initialState, action) {
	switch(action.type) {
		case 'SEARCH_VIDEO': {
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
