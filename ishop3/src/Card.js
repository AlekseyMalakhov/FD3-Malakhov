import React from 'react';
import './index.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                name: "",
                price: "",
                pic_url: "",
                stock: "",
                id: "",
            },
            valid: true,
        };
        this.changeInfo = this.changeInfo.bind(this);
        this.checkValid = this.checkValid.bind(this);
        this.cancel = this.cancel.bind(this);
    }    

    changeInfo(e) {
        var prop = e.target.id.substring(4);
        var item = {...this.state.item};
        item[prop] = e.target.value;
        this.setState({item: item}, this.checkValid);
    }

    checkValid() {
        var item = {...this.state.item};
        var valid = false;
        if (item.name && item.pic_url && item.price && item.stock) {
            valid = true;
        }
        this.setState({valid: valid});
    }


    componentDidUpdate(prevProps) {
        if (this.props.item.id !== prevProps.item.id) {
            var item = {...this.props.item};
            this.setState({item: item}, this.checkValid);
        }
    }

    cancel() {
        var item = {...this.props.item};
        this.setState({item: item}, cancel1);
        function cancel1() {
            this.checkValid();
            this.props.onEditCancel();
        }
    }

    render() {
        console.log(this.state);
        console.log(this.props);
        var card;
        if (this.props.edit) {
            card = <div className = {(this.props.showCard) ? "card" : "invisible"}>
                        <h3>{(this.props.new) ? "Add New Product:" : "Edit Existing Product:"}</h3>
                        <p>Id: {this.state.item.id}</p>
                        <label htmlFor="inp_name">Name:</label>
                        <input id = "inp_name" type="text" value = {this.state.item.name} onChange = {this.changeInfo}></input>
                        <p className = {(this.state.item.name === "") ? "err" : "invisible"}> Please, fill in the Name field</p>

                        <label htmlFor="inp_pic_url">Picture URL:</label>
                        <input id = "inp_pic_url" type="text" value = {this.state.item.pic_url} onChange = {this.changeInfo}></input>
                        <p className = {(this.state.item.pic_url === "") ? "err" : "invisible"}> Please, fill in the Picture URL field</p>

                        <label htmlFor="inp_price">Price:</label>
                        <input id = "inp_price" type="number" step="0.0001" min="0" value = {this.state.item.price} onChange = {this.changeInfo}></input>
                        <p className = {(this.state.item.price === "") ? "err" : "invisible"}> Please, fill in the Price field</p>

                        <label htmlFor="inp_stock">In stock:</label>
                        <input id = "inp_stock" type="number" step="1" min="0" value = {this.state.item.stock} onChange = {this.changeInfo}></input>
                        <p className = {(this.state.item.stock === "") ? "err" : "invisible"}> Please, fill in the In Stock field</p>

                        <input type="button" value="Save" key = "save" className = {(this.state.valid) ? "" : "invisible"} onClick = {()=> this.props.onCardChange(this.state.item)}></input>
                        <input type="button" value="Cancel" key = "cancel" onClick = {this.cancel}></input>
                    </div>;
        } else {
            card = <div className = {(this.props.showCard) ? "card" : "invisible"}>
                        <h3>Item Info:</h3>
                        <p>Name: {this.props.item.name}</p>
                        <p>Picture URL: {this.props.item.pic_url}</p>
                        <p>Price: {this.props.item.price}</p>
                        <p>In stock: {this.props.item.stock}</p>
                    </div>;
        }
        return card;

    };
}

export default Card;