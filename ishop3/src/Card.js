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
        };
        this.changeInfo = this.changeInfo.bind(this);
    }    

    changeInfo(e) {
        var prop = e.target.id.substring(4);
        var item = {...this.state.item};
        item[prop] = e.target.value;
        this.setState({item: item});
    }


    componentDidUpdate(prevProps) {
        if (this.props.item.id !== prevProps.item.id) {
            var item = {...this.props.item};
            this.setState({item: item});
        }
    }

    render() {
        console.log(this.state);
        var card;
        if (this.props.edit) {
            card = <div className = {(this.props.showCard) ? "card" : "invisible"}>
                        <h3>Edit Existing Product:</h3>
                        <p>Id: {this.state.item.id}</p>
                        <label htmlFor="inp_name">Name:</label>
                        <input id = "inp_name" type="text" value = {this.state.item.name} onChange = {this.changeInfo}></input>

                        <label htmlFor="inp_price">Price:</label>
                        <input id = "inp_price" type="number" step="0.0001" min="0" value = {this.state.item.price} onChange = {this.changeInfo}></input>

                        <label htmlFor="inp_stock">In stock:</label>
                        <input id = "inp_stock" type="number" step="1" min="0" value = {this.state.item.stock} onChange = {this.changeInfo}></input>

                        <input type="button" value="Save" key = "save" onClick = {()=> this.props.onCardChange(this.state.item)}></input>
                        <input type="button" value="Cancel" key = "cancel" onClick = {()=> this.props.onEditCancel()}></input>
                    </div>;
        } else {
            card = <div className = {(this.props.showCard) ? "card" : "invisible"}>
                        <h3>Item Info:</h3>
                        <p>Name: {this.props.item.name}</p>
                        <p>Price: {this.props.item.price}</p>
                        <p>In stock: {this.props.item.stock}</p>
                    </div>;
        }
        return card;

    };
}

export default Card;