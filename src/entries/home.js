import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
//import data from '../api.json';
// console.log('Hola mundo!' )

//import data from '../schemas'

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { Map as map } from 'immutable'

import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'

import reducer from '../reducers'

//console.log(data)
//console.log(normalizedData)

// const initialState = {
// 	data: {
// 		//...data
// 		entities: data.entities,
// 		categories: data.result.categories,
// 		results: [],
// 	},
// 	modal: {
// 		visibility: false,
// 		mediaId: null,
// 	},
// }

// OLD VERSION
// function logger_({getState, dispatch}) {
// 	return (next) => {
// 		return (action) => {
// 			console.log('vamos a enviar esta accion', action)
// 			console.log('este es mi viejo estado', getState().toJS())
// 			const value = next(action)
// 			console.log('este es mi nuevo estado', getState().toJS())
// 			return value
// 		}
// 	}
// }

// ES6 VERSION
const logger_ = ({getState, dispatch}) => next => action => {
	console.log('vamos a enviar esta accion', action)
	console.log('este es mi viejo estado', getState().toJS())
	const value = next(action)
	console.log('este es mi nuevo estado', getState().toJS())
	return value
}

const store = createStore(
	reducer,
	map(),
	composeWithDevTools(
		applyMiddleware(
			// logger_,
			reduxLogger,
			reduxThunk,
		)
	)
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
// hydrate( <Home data={data} />, homeContainer);
render(
	<Provider store={store}>
		<Home />
	</Provider>,
	homeContainer
)
