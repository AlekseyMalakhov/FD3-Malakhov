import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RainbowFrame from './RainbowFrame.js';

let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

console.log(RainbowFrame);

ReactDOM.render(<RainbowFrame colors = {colors}>Hello!</RainbowFrame>, document.getElementById('root'));
