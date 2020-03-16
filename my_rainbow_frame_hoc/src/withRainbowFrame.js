import React from 'react';
import './index.css';

function withRainbowFrame(colors) {
   return function(Conteiner) {
        return function(props) {
            var result = props.children;

            colors.forEach((color) => {
                result = createFrame(color, result);
            });

            function createFrame(color, content) {
                return (
                    <div style = {{borderColor: color}}>{content}</div>
                );
            }

            return <Conteiner>{result}</Conteiner>
        }
   }
}

export default withRainbowFrame;