import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mobile from './Mobile.js';
import Initial_data from './Initial_data.json';

ReactDOM.render(<Mobile initial_data = {Initial_data}></Mobile>, document.getElementById('root'));
