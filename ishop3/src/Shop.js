import React from 'react';
import './index.css';
import Item from './Item.js';
import Card from './Card.js';

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: [],
            showRequest: false,
            showCard: false,
            selected_item: {},
            edit: false,
            new: false,
            new_id: 6,
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
        this.handleCancel = this.handleCancel.bind(this);
    }

    getDeleteData(deleted_item) {
        this.setState({ selected_item: deleted_item,
                        showCard: true,
                        showRequest: true,
                        edit: false,
                        new: false, });
    }

    getSelectData(item) {
        if (item.id === this.state.selected_item.id) {
            this.setState({selected_item: item, showCard: true,});
        } else {
            this.setState({selected_item: item, showCard: true, edit: false, showRequest: false});
        }
        
    }

    toggleEdit(boolean, item) {
        console.log(item);
        console.log(boolean);
        this.setState({selected_item: item, showCard: true, edit: boolean, showRequest: false});
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
                selected_id: this.state.selected_item.id,
                edit: this.state.edit,
                new: this.state.new,
            };
            return <Item key = {item.id} {...props} onItemDelete = {this.getDeleteData} onItemSelect = {this.getSelectData} onItemEdit = {this.toggleEdit}/>});        
        return result;        
    }

    hideDeleteRequest() {
        this.setState({showRequest: false});
    }

    deleteRow() {
        var new_goods = [...this.state.goods];
        var pos = new_goods.findIndex((e) => (e.id === this.state.selected_item.id));
        new_goods.splice(pos, 1);
        this.setState({goods: new_goods,
                        showRequest: false,
                        showCard: false,
                        selected_item: {
                            name: "",
                            price: "",
                            pic_url: "",
                            stock: "",
                            id: "",
                        },
                        edit: false,});
                        
    }

    addRow() {
        this.setState({showCard: true,
                        selected_item: {
                            name: "",
                            price: "",
                            pic_url: "",
                            stock: "",
                            id: this.state.new_id,
                        },
                        edit: true,
                        showRequest: false,
                        new: true, });
    }

    getEditData(item) {
        var goods = [...this.state.goods];
        var id = item.id;
        var new_row = false;
        var new_id = this.state.new_id;
        for (var i = 0; i < goods.length; i++) {
            if (goods[i].id === id) {
                goods[i] = item;
            }
        }
        if (this.state.new) {
            goods.push(item);
            new_row = false;
            new_id = this.state.new_id + 1;
        }
        this.setState({goods: goods, 
                        new: new_row,
                        new_id: new_id});        
    }

    showCard() {
        var props = {
            item: this.state.selected_item,
            showCard: this.state.showCard,
            edit: this.state.edit,
            new: this.state.new,
        };
        return <Card key = "card" {...props} onCardChange = {this.getEditData} onEditCancel = {this.handleCancel}/>  
    }

    handleCancel() {
        if (this.state.new) {
            this.setState({edit:false, new: false, showCard: false});
        } else {
            this.setState({edit:false, new: false});
        }
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
                <input type="button" value="New" key = "new" disabled = {this.state.edit} onClick = {this.addRow}></input>
                <div className = {(this.state.showRequest) ? "" : "invisible"}>
                    <h3>Do you realy want to delete {this.state.selected_item.name}</h3>
                    <input type="button" value="Yes" key = "yes" onClick = {this.deleteRow}></input>
                    <input type="button" value="No" key = "no" onClick = {this.hideDeleteRequest}></input>
                </div>
            </div>            
        );
    }
}

export default Shop;