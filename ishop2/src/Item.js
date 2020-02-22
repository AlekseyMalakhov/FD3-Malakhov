import React from 'react';
import './index.css';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.deleteRowStage1 = this.deleteRowStage1.bind(this);
    }

    deleteRowStage1(e) {
        var row_to_delete = Number(e.target.id.substring(4));
        var deleted_item_name = this.props.namelist[row_to_delete];
        this.props.onItemChange({deleted_item_name: deleted_item_name,
                                showRequest: true,});
    }

    render() {
        var item = this.props.item;
        return (
            <tr className = {(this.props.selected === item.id) ? "selected" : ""} id = {"row_" + item.id} key = {item.name + "row"} onClick = {()=> this.props.onItemChange({selected: this.props.item.id})}>
                <td key = {item.name + 1}>
                    {item.name}
                </td>
                <td key = {item.price + 2}>
                    {item.price}
                </td>
                <td key = {item.name + 3}>
                    <img key = {item.name + 4} src = {"pics/" + item.pic_url} alt = {item.name + "picture"}></img>
                </td>
                <td key = {item.name + 5}>
                    {item.stock}
                </td>
                <td key = {item.name + 6}>
                    <input id = {"btn_" + item.id} type="button" value="Delete" key = {item.name + 7} onClick = {this.deleteRowStage1}></input>
                </td>
            </tr> 

        );
    }
}

export default Item;
