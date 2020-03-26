import React from 'react';
import './index.css';
import Client from "./Client.js";
import ee from "./Emitter.js";


class Table extends React.PureComponent {
    constructor(props) {
        super(props);
        this.createRows = this.createRows.bind(this);
    }

    createRows() {
        var result;
        if (this.props.clients) {
            var clients = [...this.props.clients];
            if(this.props.view === "view_all") {
                result = clients.map((e) => <Client key = {e.id} {...e}></Client>);
            }

            if(this.props.view === "view_active") {
                result = clients.map((e) => {
                    if (e.status === "active") {
                        return <Client key = {e.id} {...e}></Client>;
                    }
                });
            }

            if(this.props.view === "view_blocked") {
                result = clients.map((e) => {
                    if (e.status === "blocked") {
                        return <Client key = {e.id} {...e}></Client>;
                    }
                });
            }            
        }
        return result;
    }

    render() {
        console.log(this.props);
        return <div>
                    <table>
                        <thead>
                            <tr key = "header">
                                <th>Фамилия</th>
                                <th>Имя</th>
                                <th>Отчество</th>
                                <th>Баланс</th>
                                <th>Статус</th>
                                <th>Редактировать</th>
                                <th>Удалить</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.createRows()}
                        </tbody>
                    </table>
                    <button type="button" onClick = {() => ee.emit("add_client")}>Добавить клиента</button>
                </div>;
    }
}

export default Table;