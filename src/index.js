import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import TodoContainer from './components/todoContainer';
import './App.css';

ReactDOM.render(
  <Router>
    <TodoContainer />
  </Router>,
  document.getElementById('root'),
);
