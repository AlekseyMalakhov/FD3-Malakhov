import React from 'react';
import './index.css';
import ee from "./Emitter.js";

class Filter extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <button type="button" className = {(this.props.view === "view_all") ? "selected" : ""} onClick = {() => ee.emit("view_all")}>Все</button>
            <button type="button" className = {(this.props.view === "view_active") ? "selected" : ""} onClick = {() => ee.emit("view_active")}>Активные</button>
            <button type="button" className = {(this.props.view === "view_blocked") ? "selected" : ""} onClick = {() => ee.emit("view_blocked")}>Заблокированные</button>
        </div>;
    }
}

export default Filter;