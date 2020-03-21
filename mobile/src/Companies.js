import React from 'react';
import './index.css';

class Companies extends React.PureComponent {
    constructor(props) {
        super(props);
        this.createButtons = this.createButtons.bind(this);
    }

    createButtons() {
        var companies = [...this.props.companies];
        var result = companies.map((e, i) => <button key = {i} type="button" onClick = {() => this.props.onCompanySelect(e)}>{e}</button>);
        return result;
    }

    render() {
        return <div>
            {this.createButtons()}
        </div>;
    }
}

export default Companies;