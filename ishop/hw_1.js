/*
var questionText='Как вы относитесь к программированию?';

var answersArr=[ 
  {text:'хорошо',code:1,count:222}, 
  {text:'не получается',code:2,count:123}, 
  {text:'избегаю',code:3,count:444} 
];

var VotesBlock = React.createClass({

  displayName: 'VotesBlock',

  propTypes: {
    question: React.PropTypes.string.isRequired,
    answers: React.PropTypes.array.isRequired,
  },

  render: function() {

    var answersCode=this.props.answers.map( v =>
        React.DOM.div({key:v.code,className:'Answer'},
          React.DOM.span({className:'Count'},v.count),
          React.DOM.span({className:'Text'},v.text),
        )
      );
    return React.DOM.div( {className:'VotesBlock'}, 
      React.DOM.div( {className:'Question'}, this.props.question ),
      React.DOM.div( {className:'Answers'}, answersCode ),
    );
  },

});

ReactDOM.render(
  React.createElement(VotesBlock,{question:questionText,answers:answersArr}),
  document.getElementById('container')
);
*/


var goods = [
  {
    name: "book",
    price: 10,
    pic_url: "",
    stock: 47
  },
  {
    name: "pencil",
    price: 7,
    pic_url: "",
    stock: 25
  },
  {
    name: "sheet",
    price: 8,
    pic_url: "",
    stock: 32
  },
  {
    name: "glue",
    price: 5,
    pic_url: "",
    stock: 27
  },
  {
    name: "ruler",
    price: 6,
    pic_url: "",
    stock: 74
  },

];

console.log(goods);

var ShowGoods = React.createClass({
    displayName: 'ShowGoods',
  
    render: function(){  
      return React.DOM.div( {className:'MyComponentFrame'}, 
        React.DOM.h1( null, "Hi" ),
        React.DOM.div( {className:'MyComponentText'}, "all" ),
      );
    },
  
});

ReactDOM.render(
    React.createElement(ShowGoods), 
    document.getElementById('root') 
);