import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mobile from './Mobile.js';
import Initial_data from './Initial_data.json';


function addEditProperty(Initial_data) {
    var result = {...Initial_data};
    result.clients = {...result.clients};
    var id;
    for (id in result.clients) {
        var clients_arr = [...result.clients[id]];
        var new_client_arr = clients_arr.map((e) => {
            var client = {...e};
            client.edit = "false";
            return client;
            });
        result.clients[id] = new_client_arr;
    }
    return result;    
}

var init_data = addEditProperty(Initial_data);
console.log(Initial_data);
console.log(init_data);

ReactDOM.render(<Mobile initial_data = {Initial_data}></Mobile>, document.getElementById('root'));
