import React from 'react';
import './index.css';
import ee from "./Emitter.js";

class Client extends React.PureComponent {
    constructor(props) {
        super(props);
        this.checkColor = this.checkColor.bind(this);
        this.clientRow = this.clientRow.bind(this);
        this.clientSurname = React.createRef();
        this.clientName = React.createRef();
        this.clientPatronymic = React.createRef();
        this.clientBalance = React.createRef();
        this.clientStatus = React.createRef();
        this.onEditSurname = this.onEditSurname.bind(this);
        this.onEditName = this.onEditName.bind(this);
        this.onEditPatronymic = this.onEditPatronymic.bind(this);
        this.onEditBalance = this.onEditBalance.bind(this);
        this.onEditStatus = this.onEditStatus.bind(this);
        this.editClient = this.editClient.bind(this);
    }

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

    onEditStatus(client, data) {
        var data = data.current.value;
        console.log(data);
        this.editClient(client, "status", data);
    }

    changed_client;

    editClient(client, type, data) {
        this.changed_client = {...client};
        this.changed_client[type] = data;
        this.changed_client.edit = false;
    }

    checkColor() {
        if (this.props.status === "active") {
            return "active";
        }
        if (this.props.status === "blocked") {
            return "blocked";
        }
    }

    clientRow() {
        var client = this.props;
        this.changed_client = {...this.props};
        this.changed_client.edit = false;

        if(!client) {
            return <tr><td></td></tr>;
        }

        if (!client.edit) {
            return (
                <tr key = {client.id + "row"}>
                    <td key = {client.id + "surname"}>{client.surname}</td>
                    <td key = {client.id + "name"}>{client.name}</td>
                    <td key = {client.id + "patronymic"}>{client.patronymic}</td>
                    <td key = {client.id + "balance"}>{client.balance}</td>
                    <td className = {this.checkColor()} key = {client.id + "status"}>{client.status}</td>
                    <td key = {client.id + "edit"}>
                        <button type = "button" key = {client.id + "btn_edit"} onClick = {() => ee.emit("edit", client, true)}>Редактировать</button>
                    </td>
                    <td key = {client.id + "delete"}>
                        <button type = "button" key = {client.id + "btn_del"} onClick = {() => ee.emit("delete", client)}>Удалить</button>
                    </td>
                </tr>
                );
        } else {
            return (
                <tr key = {client.id + "row"}>
                    <td key = {client.id + "surname"}>
                        <input type="text" ref={this.clientSurname} onChange = {() => this.onEditSurname(client, this.clientSurname)}></input>
                    </td>
                    <td key = {client.id + "name"}>
                        <input type="text" ref={this.clientName} onChange = {() => this.onEditName(client, this.clientName)}></input>
                    </td>
                    <td key = {client.id + "patronymic"}>
                        <input type="text" ref={this.clientPatronymic} onChange = {() => this.onEditPatronymic(client, this.clientPatronymic)}></input>
                    </td>
                    <td key = {client.id + "balance"}>
                        <input type="number" ref={this.clientBalance} onChange = {() => this.onEditBalance(client, this.clientBalance)}></input>
                    </td>
                    <td className = {this.checkColor()} key = {client.id + "status"}>
                        <select ref={this.clientStatus} onChange = {() => this.onEditStatus(client, this.clientStatus)}>
                            <option>active</option>
                            <option>blocked</option>
                        </select>
                    </td>
                    <td key = {client.id + "save"}>
                        <button type = "button" key = {client.id + "btn_save"} onClick = {() => ee.emit("save", client, this.changed_client)}>Сохранить</button>
                    </td>
                    <td key = {client.id + "cancel"}>
                        <button type = "button" key = {client.id + "btn_can"} onClick = {() => ee.emit("edit", client, false)}>Отмена</button>
                    </td>
                </tr>
                );
        }
    }

    render() {        
        return this.clientRow();
    }
}

export default Client;