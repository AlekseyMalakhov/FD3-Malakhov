import React from 'react';
import './index.css';
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
            company: "Velcom",
            new_id: 5,
            view: "view_all"
        };
        this.selectCompany = this.selectCompany.bind(this);
        this.onEditToggle = this.onEditToggle.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onAddClient = this.onAddClient.bind(this);

    }

    componentDidMount() {
        ee.on("edit", this.onEditToggle);
        ee.on("delete", this.onDelete);
        ee.on("save", this.onSave);
        ee.on("add_client", this.onAddClient);
        ee.on("view_all", () => this.setState({view: "view_all"}));
        ee.on("view_active", () => this.setState({view: "view_active"}));
        ee.on("view_blocked", () => this.setState({view: "view_blocked"}));
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

    selectCompany(company) {
        this.setState({company: company});
    }

    onAddClient() {
        var adding;
        if (this.state.company === "Velcom") {
            adding = "_Vel";
        } else {
            adding = "_MTS";
        }
        var new_client = {
            id: this.state.new_id + adding,
            surname: "",
            name: "",
            patronymic: "",
            balance: 0,
            status: "active",
            edit: true,
            company: this.state.company
        };
        var new_client_list = {...this.state.clients};
        var clients_arr = [...new_client_list[new_client.company]];
        clients_arr.push(new_client);
        new_client_list[new_client.company] = clients_arr;        
        //console.log(new_client_list);
        //console.log(this.state.clients);
        this.setState({clients: new_client_list,
                        new_id: (this.state.new_id + 1)});
    }

    render() {
        console.log("Mobile");
        var company = this.state.company;
        return <div>
                <Filter view = {this.state.view}></Filter>
                <Table clients = {this.state.clients[company]} view = {this.state.view}></Table>
            </div>;

    }
}

export default Mobile;