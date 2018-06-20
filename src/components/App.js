import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducers from "../reducers";
import '../styles/main.scss';

const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);


export default class App extends Component {

	render() {
		return (
			<Provider store={createStoreWithMiddleware(reducers)}>
				<h1>React boilerplate</h1>			
			</Provider>
			
		);
	}
}