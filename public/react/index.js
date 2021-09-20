import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import {HashRouter as Router} from 'react-router-dom';

import {App} from './components/App';

ReactDOM.render(
	<Router>
	<App />
	</Router>,
	document.getElementById('root')
)