import React from 'react';
import {
	render
} from 'react-dom';
import {
	Provider
} from 'react-redux';
import Header from './containers/header';
import Footer from './containers/footer';
import store from './store/store.js';
render(
	<Provider store={store}>
		<div>
			<Header />
			<Footer />
		</div>
	</Provider>,
	document.getElementById('StageRoot')
)