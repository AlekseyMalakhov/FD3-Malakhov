import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="filt">
                <div className="panel">
                    <input type="checkbox"></input>
                    <input type="text"></input>
                    <input type="button" value="Сброс"></input>
                </div> 
                 <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul> 
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
