import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TodoContainer from './components/todoContainer';
import './App.css';

ReactDOM.render(
  <BrowserRouter>
    <TodoContainer />
  </BrowserRouter>,
  document.getElementById('root'),
);
