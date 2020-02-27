import React from 'react';
import './index.css';
import Item from './Item.js'

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: [],
            deleted_item_name: "",
            deleted_item_id: "",
            showRequest: false,
            showCard: false,
            selected_item: {},
            edit: false,
        };
        this.createRows = this.createRows.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.hideDeleteRequest = this.hideDeleteRequest.bind(this);
        this.getDeleteData = this.getDeleteData.bind(this);
        this.getSelectData = this.getSelectData.bind(this);
        this.addRow = this.addRow.bind(this);
        this.showCard = this.showCard.bind(this);
        this.getEditData = this.getEditData.bind(this);
    }

    getDeleteData(deleted_item_name, deleted_item_id) {
        this.setState({deleted_item_name: deleted_item_name,
                        deleted_item_id: deleted_item_id,
                        showRequest: true});
    }

    getSelectData(item) {
        this.setState({selected_item: item, showCard: true,});
    }

    getEditData(boolean) {
        console.log(boolean);
        this.setState({edit: boolean});
    }

    componentDidMount() {
        var goods = [...this.props.goods];
        this.setState({goods: goods});
    }
    
    createRows() {
        var goods = [...this.state.goods];
        var result = goods.map((item) => {
            var props = {
                item: item,
                selected: this.state.selected_item.id,
            };
            return <Item key = {item.id} {...props} onItemDelete = {this.getDeleteData} onItemSelect = {this.getSelectData} onItemEdit = {this.getEditData}/>});        
        return result;        
    }

    hideDeleteRequest() {
        this.setState({showRequest: false});
    }

    deleteRow() {
        var new_goods = [...this.state.goods];
        var pos = new_goods.findIndex((e) => (e.id === this.state.deleted_item_id));
        new_goods.splice(pos, 1);
        this.setState({goods: new_goods,
                        showRequest: false,
                        showCard: false,
                        selected_item: {},});
                        
    }

    addRow() {
        console.log("row added");
    }

    showCard() {
        var card;
        if (this.state.edit) {
            card = <div className = {(this.state.showCard) ? "card" : "invisible"}>
                        <h3>Item Info</h3>
                        <label htmlFor="name_inp">Name:</label>
                        <input id = "name_inp" type="text"></input>

                        <label htmlFor="price_inp">Price:</label>
                        <input id = "price_inp" type="text"></input>

                        <label htmlFor="stock_inp">In stock:</label>
                        <input id = "stock_inp" type="text"></input>
                    </div>;
        } else {
            card = <div className = {(this.state.showCard) ? "card" : "invisible"}>
                        <h3>Item Info</h3>
                        <p>Name: {this.state.selected_item.name}</p>
                        <p>Price: {this.state.selected_item.price}</p>
                        <p>In stock: {this.state.selected_item.stock}</p>
                    </div>;
        }
        return card;
    }

    render() { 
        console.log(this.state);
        return (
            <div>
                <h3>{this.props.shop_name}</h3>
                <div className = "wrapper">
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
                    {this.showCard()}
                </div>
                <input type="button" value="New" key = "new" onClick = {this.addRow}></input>
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