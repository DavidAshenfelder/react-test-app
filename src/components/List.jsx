var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [
  {
    "id": 1,
    "test": "ham"
  },
  {
    "id": 2,
    "test": "cheese"
  },
  {
    "id": 3,
    "test": "potatoes"
  }
];

var List = React.createClass({
  render: function() {
    var ListItem = ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text} />;
    });
    return (<ul>{ListItem}</ul>);
  }
});

module.exports = List;
