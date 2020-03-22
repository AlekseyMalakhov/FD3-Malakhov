import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mobile from './Mobile.js';
import Initial_data from './Initial_data.json';


function addEditProperty() {
    console.log(Initial_data);
    /*
    var init_data = {...Initial_data};
    var id;
    for (id in init_data.clients) {
        console.log(id);
        init_data.clients[id].forEach((e) => {e.edit = "false"})
    }  
    */
    var id;
    for (id in Initial_data.clients) {
        var clients = Initial_data.clients[id];
        clients.forEach((e) => {
            var client = {...e};
            console.log(client);
            client.edit = "false";
            });
    }
    
}

addEditProperty();

ReactDOM.render(<Mobile initial_data = {Initial_data}></Mobile>, document.getElementById('root'));
