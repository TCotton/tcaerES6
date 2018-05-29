import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, Router, hashHistory, IndexRoute } from 'react-router';

// import './styles/styles.scss';
import Person from '../playground/classes.js';

console.dir(Person);

import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';

ReactDOM.render(
	<div>
		<ComponentOne />
		<ComponentTwo />
	</div>,
	document.querySelector('#root')
);

