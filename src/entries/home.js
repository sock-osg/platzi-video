import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
//import data from '../api.json';
// console.log('Hola mundo!' )

//import data from '../schemas'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Map as map } from 'immutable'

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

const store = createStore(
	reducer,
	map({}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
//hydrate( <Home data={data} />, homeContainer);
render(
	<Provider store={store}>
		<Home />
	</Provider>,
	homeContainer
)
