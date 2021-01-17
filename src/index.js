import React from 'react';

import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Routes } from './routes'; // where we are going to specify our routes

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('root')
);
