import React from 'react';
import './index.css';
import Item from './Item.js';
import Card from './Card.js';

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
            selected_item_id: "",
            edit: false,
        };
        this.createRows = this.createRows.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.hideDeleteRequest = this.hideDeleteRequest.bind(this);
        this.getDeleteData = this.getDeleteData.bind(this);
        this.getSelectData = this.getSelectData.bind(this);
        this.addRow = this.addRow.bind(this);
        this.showCard = this.showCard.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.getEditData = this.getEditData.bind(this);
    }

    getDeleteData(deleted_item_name, deleted_item_id, deleted_item) {
        this.setState({deleted_item_name: deleted_item_name,
                        deleted_item_id: deleted_item_id,
                        selected_item_id: deleted_item_id,
                        selected_item: deleted_item,
                        showCard: true,
                        showRequest: true,
                        edit: false, });
    }

    getSelectData(item) {
        if (item.id === this.state.selected_item.id) {
            this.setState({selected_item: item, selected_item_id: item.id, showCard: true,});
        } else {
            this.setState({selected_item: item, selected_item_id: item.id, showCard: true, edit: false, deleted_item_id: "", deleted_item_name: "", showRequest: false});
        }
        
    }

    toggleEdit(boolean, item) {
        console.log(item);
        console.log(boolean);
        this.setState({selected_item: item, selected_item_id: item.id, showCard: true, edit: boolean, deleted_item_id: "", deleted_item_name: "", showRequest: false});
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
                selected_id: this.state.selected_item_id,
            };
            return <Item key = {item.id} {...props} onItemDelete = {this.getDeleteData} onItemSelect = {this.getSelectData} onItemEdit = {this.toggleEdit}/>});        
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
                        deleted_item_name: "",
                        deleted_item_id: "",
                        showCard: false,
                        selected_item: {
                            name: "",
                            price: "",
                            pic_url: "",
                            stock: "",
                            id: "",
                        },
                        selected_item_id: "",
                        edit: false,});
                        
    }

    addRow() {
        console.log("row added");
    }

    getEditData(item) {
        var goods = [...this.state.goods];
        var id = item.id;
        for (var i = 0; i < goods.length; i++) {
            if (goods[i].id === id) {
                goods[i] = item;
            }
        }
        this.setState({goods: goods});        
    }

    showCard() {
        var props = {
            item: this.state.selected_item,
            showCard: this.state.showCard,
            edit: this.state.edit,
        };
        return <Card key = "card" {...props} onCardChange = {this.getEditData} onEditCancel = {() => {this.setState({edit:false})}}/>  
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