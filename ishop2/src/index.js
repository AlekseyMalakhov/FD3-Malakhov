import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var goods = [
    {   
      name: "book",
      price: 10,
      pic_url: "book.jpg",
      stock: 47,
      id: 1,
    },
    {
      name: "pencil",
      price: 7,
      pic_url: "pencil.jpg",
      stock: 25,
      id: 2,
    },
    {
      name: "sheet",
      price: 8,
      pic_url: "sheet.jpg",
      stock: 32,
      id: 3,
    },
    {
      name: "glue",
      price: 5,
      pic_url: "glue.jpg",
      stock: 27,
      id: 4,
    },
    {
      name: "ruler",
      price: 6,
      pic_url: "ruler.jpg",
      stock: 74,
      id: 5,
    },
  ];

var props = {
    goods: goods,
    shop_name: "Mega Shop 2"
};

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
                   <Item {...props} onItemChange = {this.getData} />        
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

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.selectRow = this.selectRow.bind(this);
        this.deleteRowStage1 = this.deleteRowStage1.bind(this);
    }

    selectRow(e) {
        var selected;
        if ((e.target.tagName === "INPUT" || e.target.tagName === "IMG" )) {
            selected = Number(e.target.parentNode.parentNode.id.substring(4));
        } else {
            selected = Number(e.target.parentNode.id.substring(4));
        }
        this.props.onItemChange({selected: selected});
    }

    deleteRowStage1(e) {
        var row_to_delete = Number(e.target.id.substring(4));
        var deleted_item_name = this.props.namelist[row_to_delete];
        this.props.onItemChange({deleted_item: row_to_delete,
                                deleted_item_name: deleted_item_name,
                                showRequest: true,});
    }

    render() {
        var item = this.props.item;
        return (
            <tr className = {(this.props.selected === item.id) ? "selected" : ""} id = {"row_" + item.id} key = {item.name + "row"} onClick = {this.selectRow}>
                <td key = {item.name + 1}>
                    {item.name}
                </td>
                <td key = {item.price + 2}>
                    {item.price}
                </td>
                <td key = {item.name + 3}>
                    <img key = {item.name + 4} src = {"pics/" + item.pic_url}></img>
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



ReactDOM.render(<Shop {...props}/>, document.getElementById('root'));
