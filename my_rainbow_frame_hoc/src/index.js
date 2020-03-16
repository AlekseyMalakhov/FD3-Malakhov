import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import withRainbowFrame from './withRainbowFrame.js';

let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

let FramedFragment = withRainbowFrame(colors)(Fragment);

ReactDOM.render(<FramedFragment>Hello!</FramedFragment>, document.getElementById('root'));
