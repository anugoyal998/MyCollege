import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./styles/style.css";
import 'animate.css';
import Main from "./Main"
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Main />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);