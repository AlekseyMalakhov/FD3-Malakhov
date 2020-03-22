import React from 'react';
import './index.css';
import ee from "./Emitter.js";

class Client extends React.PureComponent {
    constructor(props) {
        super(props);
        this.checkColor = this.checkColor.bind(this);
        this.clientRow = this.clientRow.bind(this);
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
                        <input type="text" ></input>
                    </td>
                    <td key = {client.id + "name"}>
                        <input type="text" ></input>
                    </td>
                    <td key = {client.id + "patronymic"}>
                        <input type="text" ></input>
                    </td>
                    <td key = {client.id + "balance"}>
                        <input type="number" ></input>
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