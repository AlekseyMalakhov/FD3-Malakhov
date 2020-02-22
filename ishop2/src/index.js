import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shop from './Shop.js'

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

ReactDOM.render(<Shop {...props}/>, document.getElementById('root'));
