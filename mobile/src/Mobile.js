import React from 'react';
import './index.css';
import Companies from "./Companies.js";
import Filter from "./Filter.js";
import Table from "./Table.js";
import ee from "./Emitter.js";

function makeImmutable(client, state) {
    var result = {};
    var new_client = {...client};
    var new_client_list = {...state.clients};
    var clients_arr = [...new_client_list[new_client.company]];
    var pos = clients_arr.findIndex((e) => (e.id === new_client.id));
    clients_arr[pos] = new_client;
    new_client_list[new_client.company] = clients_arr;
    result = {
        new_client: new_client,
        position: pos,
        new_client_list: new_client_list
    };
    return result;
} 

class Mobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: {},
            companies:[],
            company: "",
        };
        this.selectCompany = this.selectCompany.bind(this);
        this.onEditToggle = this.onEditToggle.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onCancel = this.onCancel.bind(this);
        /*
        this.onEditSurname = this.onEditSurname.bind(this);
        this.onEditName = this.onEditName.bind(this);
        this.onEditPatronymic = this.onEditPatronymic.bind(this);
        this.onEditBalance = this.onEditBalance.bind(this);
        this.editClient = this.editClient.bind(this);
        */


    }

    componentDidMount() {
        ee.on("edit", this.onEditToggle);

        /*
        ee.on("edit_surname", this.onEditSurname);
        ee.on("edit_name", this.onEditName);
        ee.on("edit_patronymic", this.onEditPatronymic);
        ee.on("edit_balance", this.onEditBalance);
        */

        ee.on("delete", this.onDelete);
        ee.on("save", this.onSave);
        //ee.on("cancel", this.onCancel);
        var clients = {...this.props.initial_data.clients};
        var companies = [...this.props.initial_data.companies];
        this.setState({clients: clients,
                        companies: companies,
                        company: companies[0]
        });
    }

    onEditToggle(client, bool) {
        var result = makeImmutable(client, this.state);
        result.new_client.edit = bool;
        //console.log(this.state.clients);
        //console.log(result.new_client_list);
        this.setState({clients: result.new_client_list});
    }

    /*

    onEditSurname(client, data) {
        var data = data.current.value;
        this.editClient(client, "surname", data);
    }

    onEditName(client, data) {
        var data = data.current.value;
        this.editClient(client, "name", data);
    }

    onEditPatronymic(client, data) {
        var data = data.current.value;
        this.editClient(client, "patronymic", data);
    }

    onEditBalance(client, data) {
        var data = data.current.value;
        this.editClient(client, "balance", data);
    }

    editClient(client, type, data) {
        var result = makeImmutable(client, this.state);
        result.new_client[type] = data;
        //console.log(this.state.clients);
        //console.log(result.new_client_list);
        this.setState({clients: result.new_client_list});
    }

    */

    onDelete(client) {
        var result = makeImmutable(client, this.state);
        var pos = result.position;
        result.new_client_list[client.company].splice(pos, 1);
        //console.log(this.state.clients);
        //console.log(result.new_client_list);
        this.setState({clients: result.new_client_list});
    }

    onSave(client, changed_client) {
        //console.log(client);
        //console.log(changed_client);
        var result = makeImmutable(client, this.state);
        var pos = result.position;
        result.new_client_list[client.company][pos] = changed_client;
        //console.log(this.state.clients);
        //console.log(result.new_client_list);
        this.setState({clients: result.new_client_list});

    }

    onCancel(client) {
        console.log("cancel");
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