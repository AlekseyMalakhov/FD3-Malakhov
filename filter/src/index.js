import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var props = [
    "создавать",
    "пользовательские",
    "создавать интерактивные",
    "пользовательские интерфейсы",
    "реакт интерфейсы",
    "реакт приятно и просто",
    "приятно",
    "просто",
    "части",
    "части приложения",
    "выглядят просто",
    "интерфейса приложения",
    "приложения",
    "выглядят",
    "приложения выглядят",
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            match: [],
            check: false,
            text: "",
        };
        this.createList = this.createList.bind(this);
        this.checkText = this.checkText.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.cleanInput = this.cleanInput.bind(this);
    }

    createList() {
        var result;
        var match = [...this.state.match];
        if (this.state.check) {
            result = this.props.txt.map(checkMatch);
        } else {
            result = this.props.txt.map((e) => <li key = {e + 25}>{e}</li>);
        }
        function checkMatch(e) {
            if (match.includes(e)) {
                return <li key = {e + 25}>{e}</li>;
            }
        }
        return result;
    }

    handleCheckBox(e) {
        this.setState({check: e.target.checked});
    }

    checkText(e) {
        var text = e.target.value;
        var match = [];
        this.props.txt.map(checkStr);
        function checkStr(str) {
            if (str.indexOf(text) !== -1) {
                match.push(str);
            }
        }
        this.setState({match: match,
                        text: text});
    }

    cleanInput() {
        this.setState({match: [],
                        text: ""});
    }

    render() {  
        return (
            <div className="filt">
                <div className="panel">
                    <input type="checkbox" onChange={this.handleCheckBox}></input>
                    <input type="text" value = {this.state.text} onChange={this.checkText}></input>
                    <input type="button" value="Сброс" onClick = {this.cleanInput}></input>
                </div> 
                 <ul>
                   {this.createList()}
                </ul> 
            </div>
        );
    }
}

ReactDOM.render(<App txt = {props}/>, document.getElementById('root'));
