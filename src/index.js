import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./Components/Header"
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
  <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
