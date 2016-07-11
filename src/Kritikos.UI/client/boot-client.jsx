import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { KritikosApp } from './app/KritikosApp.jsx';

// In the browser, we render into a DOM node and hook up to the browser's history APIs
ReactDOM.render(<KritikosApp history={ browserHistory } />, document.getElementById('kritikos-app'));