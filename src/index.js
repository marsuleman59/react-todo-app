import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
  <div className= "main">
    <App name = "Car"/>
    <App name = "Van"/>
    <App name = "MotorCycle"/>
    <App name = "Bike"/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
