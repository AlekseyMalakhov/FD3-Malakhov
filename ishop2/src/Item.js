import React from 'react';
import './index.css';

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var item = this.props.item;
        return (
            <tr className = {(this.props.selected === item.id) ? "selected" : ""} id = {"row_" + item.id} key = {item.id + "row"} onClick = {()=> this.props.onItemSelect({selected: this.props.item.id})}>
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
                    <input id = {"btn_" + item.id} type="button" value="Delete" key = {item.name + 7} onClick = {()=> this.props.onItemDelete({deleted_item_name: this.props.item.name, showRequest: true,})}></input>
                </td>
            </tr> 

        );
    }
}

export default Item;
