import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shop from './Shop.js';
import Props from './Props.js';

ReactDOM.render(<Shop {...Props}/>, document.getElementById('root'));
