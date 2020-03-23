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
        console.log(this.props);
        var client = this.props;

        if(!client) {
            return <tr><td></td></tr>;
        }

        console.log(client.edit);

        if (!client.edit) {
            return (
                <tr key = {client.id + "row"}>
                    <td key = {client.id + "surname"}>{client.surname}</td>
                    <td key = {client.id + "name"}>{client.name}</td>
                    <td key = {client.id + "patronymic"}>{client.patronymic}</td>
                    <td key = {client.id + "balance"}>{client.balance}</td>
                    <td className = {this.checkColor()} key = {client.id + "status"}>{client.status}</td>
                    <td key = {client.id + "edit"}>
                        <button type = "button" key = {client.id + "btn_edit"} onClick = {() => ee.emit("edit", client)}>Редактировать</button>
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
                        <input type="text" ref={this.clientSurname} onChange = {() => ee.emit("edit_input", client, this.clientSurname)}></input>
                    </td>
                    <td key = {client.id + "name"}>
                        <input type="text" ref={this.clientName} onChange = {() => ee.emit("edit_input", client, this.clientName)}></input>
                    </td>
                    <td key = {client.id + "patronymic"}>
                        <input type="text" ref={this.clientPatronymic} onChange = {() => ee.emit("edit_input", client, this.clientPatronymic)}></input>
                    </td>
                    <td key = {client.id + "balance"}>
                        <input type="number" ref={this.clientBalance} onChange = {() => ee.emit("edit_input", client, this.clientBalance)}></input>
                    </td>
                    <td className = {this.checkColor()} key = {client.id + "status"}>
                        <select>
                            <option>active</option>
                            <option>blocked</option>
                        </select>
                    </td>
                    <td key = {client.id + "save"}>
                        <button type = "button" key = {client.id + "btn_save"} onClick = {() => ee.emit("save", client)}>Сохранить</button>
                    </td>
                    <td key = {client.id + "cancel"}>
                        <button type = "button" key = {client.id + "btn_can"} onClick = {() => ee.emit("cancel", client)}>Отмена</button>
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