import React from 'react';
import './index.css';
import Item from './Item.js'

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            delete_rows: [],
            deleted_item: "",
            deleted_item_name: "",
            showRequest: false,
            namelist: [],
            selected: "",
        };
        
        this.createRows = this.createRows.bind(this);
        this.createRow = this.createRow.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.hideDeleteRequest = this.hideDeleteRequest.bind(this);
        this.getData = this.getData.bind(this);
    }

    getData(local_state) {
        this.setState(local_state);
    }

    componentDidMount() {
        var result = [0];
        this.props.goods.map(extractName);
        function extractName(e) {
            result[e.id] = e.name;
        }
        this.setState({namelist: result});
    }
    
    createRows() {
        var goods = this.props.goods;
        var result = goods.map(this.createRow);        
        return result;        
    }

    createRow(item) {
        var props = {
            ...{item: item},
            ...this.state
        };
        if (!this.state.delete_rows.includes(item.id)) {
            return (
                   <Item key = {item.name + 123} {...props} onItemChange = {this.getData} />        
            );
        } else {
            return null;
        }
    }    

    hideDeleteRequest() {
        this.setState({showRequest: false});
    }

    deleteRow() {
        var delete_rows = [...this.state.delete_rows];
        delete_rows.push(this.state.deleted_item);
        this.setState({delete_rows: delete_rows,
                        showRequest: false});
    }

    render() { 
        return (
            <div>
                <h3>{this.props.shop_name}</h3>
                <table>
                    <thead>
                        <tr key = "header">
                            <th key = "name">Name</th>
                            <th key = "price">Price</th>
                            <th key = "pic">Picture</th>
                            <th key = "stock">In stock</th>
                            <th key = "contr">Control</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.createRows()}
                    </tbody>
                </table>
                <div className = {(this.state.showRequest) ? "" : "invisible"}>
                    <h3>Do you realy want to delete {this.state.deleted_item_name}</h3>
                    <input type="button" value="Yes" key = "yes" onClick = {this.deleteRow}></input>
                    <input type="button" value="No" key = "no" onClick = {this.hideDeleteRequest}></input>
                </div>
            </div>            
        );
    }
}

export default Shop;