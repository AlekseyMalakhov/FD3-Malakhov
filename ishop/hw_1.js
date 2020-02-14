var goods = [
  {
    name: "book",
    price: 10,
    pic_url: "book.jpg",
    stock: 47
  },
  {
    name: "pencil",
    price: 7,
    pic_url: "pencil.jpg",
    stock: 25
  },
  {
    name: "sheet",
    price: 8,
    pic_url: "sheet.jpg",
    stock: 32
  },
  {
    name: "glue",
    price: 5,
    pic_url: "glue.jpg",
    stock: 27
  },
  {
    name: "ruler",
    price: 6,
    pic_url: "ruler.jpg",
    stock: 74
  },
];

function createRow(goods) {
  return React.DOM.tr({key: goods.name + "row"}, 
          React.DOM.td({key: goods.name + 1}, goods.name),
          React.DOM.td({key: goods.name + 2}, goods.price),
          React.DOM.td({key: goods.name + 3},
            React.DOM.img({key: goods.name + 4, src: "pics/" + goods.pic_url}, null), 
          ),
          React.DOM.td({key: goods.name + 5}, goods.stock)
        );
}

var ShowGoods = React.createClass({
  displayName: 'ShowGoods',

  propTypes: {
    goods: React.PropTypes.array.isRequired,
    shop_name: React.PropTypes.string.isRequired,
  }, 

  render: function(){ 
            return React.DOM.div(null,
                    React.DOM.h3( null, this.props.shop_name),
                    React.DOM.table( null,
                      React.DOM.thead( null,
                        React.DOM.tr({key: "header"}, 
                          React.DOM.th({key: "name"}, "Name"),
                          React.DOM.th({key: "price"}, "Price"),
                          React.DOM.th({key: "pic"}, "Picture"),
                          React.DOM.th({key: "stock"}, "In stock")
                        ),
                      ),
                      React.DOM.tbody( null,
                        this.props.goods.map(createRow),
                      ),
                    ),
                  );
  },
});

var props = {
  goods: goods,
  shop_name: "Mega Shop"
};

ReactDOM.render(
    React.createElement(ShowGoods, props), 
    document.getElementById('root') 
);