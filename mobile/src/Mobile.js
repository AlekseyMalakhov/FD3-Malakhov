import React from 'react';
import './index.css';
import Companies from "./Companies.js";
import Filter from "./Filter.js";
import Table from "./Table.js";


class Mobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: {},
            companies:[],
            company: "",
        };
        this.selectCompany = this.selectCompany.bind(this);

    }

    componentDidMount() {
        var clients = {...this.props.initial_data.clients};
        var companies = [...this.props.initial_data.companies];
        this.setState({clients: clients,
                        companies: companies,
                        company: companies[0]
        });
    }

    selectCompany(company) {
        this.setState({company: company});
    }

    render() {
        console.log(this.props);
        var company = this.state.company;
        return <div>
                <Companies companies = {this.state.companies} onCompanySelect = {this.selectCompany}></Companies>
                <p>Компания: {this.state.company}</p>
                <Filter></Filter>
                <Table clients = {this.state.clients[company]}></Table>
            </div>;

    }
}

export default Mobile;