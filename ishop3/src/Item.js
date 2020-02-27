import React from 'react';
import './index.css';

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var item = this.props.item;
        return (
            <tr className = {(this.props.selected === item.id) ? "selected" : ""} id = {"row_" + item.id} key = {item.id + "row"} onClick = {()=> this.props.onItemSelect(this.props.item)}>
                <td key = {item.id + item.name}>
                    {item.name}
                </td>
                <td key = {item.id + item.price}>
                    {item.price}
                </td>
                <td key = {item.id + "img1"}>
                    <img key = {item.id + "img2"} src = {"pics/" + item.pic_url} alt = {item.name + "picture"}></img>
                </td>
                <td key = {item.id + item.stock}>
                    {item.stock}
                </td>
                <td key = {item.id + "delete"}>
                    <input id = {"btn_edit" + item.id} type="button" value="Edit" key = {item.id + 7} onClick = {()=> this.props.onItemEdit(true)}></input>
                    <input id = {"btn_del" + item.id} type="button" value="Delete" key = {item.id + 8} onClick = {()=> this.props.onItemDelete(this.props.item.name, this.props.item.id)}></input>                    
                </td>
            </tr> 

        );
    }
}

export default Item;
