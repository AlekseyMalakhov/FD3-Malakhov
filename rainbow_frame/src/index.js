import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RainbowFrame from './RainbowFrame.js';

let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render(<RainbowFrame colors = {colors}/>, document.getElementById('root'));
