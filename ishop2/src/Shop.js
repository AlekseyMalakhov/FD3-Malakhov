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
            selected: "",
        };
        this.createRows = this.createRows.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.hideDeleteRequest = this.hideDeleteRequest.bind(this);
        this.getData = this.getData.bind(this);
    }

    getData(local_state) {
        this.setState(local_state);
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
                selected: this.state.selected,
            };
            return <Item key = {item.id} {...props} onItemDelete = {this.getData} onItemSelect = {this.getData}/>});        
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
                        showRequest: false});
                        
    }

    render() { 
        console.log(this.state);
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