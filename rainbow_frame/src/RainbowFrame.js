import React from 'react';
import './index.css';

function RainbowFrame(props) {
    console.log(props);
    var result = props.children;

    props.colors.forEach((color) => {
        result = createFrame(color, result);
    });

    function createFrame(color, content) {
        return (
            <div style = {{borderColor: color}}>{content}</div>
        );
    }

    return result;  
}
export default RainbowFrame;