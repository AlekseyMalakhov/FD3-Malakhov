import React from 'react';
import './index.css';

function BR2JSX(props) {
    var result = [];

    var patt = /[а-я]+/g;
    var arr = props.text.match(patt);

    console.log(arr);

    arr.forEach((word, i) => {
        result.push(word);
        if (i !== (arr.length-1)) {
            result.push((<br key = {i}/>));
        }
    });
    return result;
}

export default BR2JSX;