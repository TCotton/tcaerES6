import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, Router, hashHistory, IndexRoute } from 'react-router';

// import './styles/styles.scss';
import Person from '../playground/classes.js';

console.dir(Person);

import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';

import '../playground/higher-order-functions.js';

ReactDOM.render(
	<div>
		<ComponentOne count={123} />
		<ComponentTwo count={321} />
	</div>,
	document.querySelector('#root')
);

