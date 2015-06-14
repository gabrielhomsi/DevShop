var Cart = React.createClass({displayName: "Cart",
  handleRemove: function (i) {
    this.props.handleRemove(i);
  },

  render: function () {
    var _this = this;

    var createCartItem = function (developer, i) {
      return {
        Username: developer.username,
        Price: "$" + developer.price
      };
    };

    return React.createElement("div", {className: "cart row"}, 
      React.createElement("h2", null, "Cart"), 
      React.createElement(Reactable.Table, {
        className: "table", 
        data: this.props.developers.map(createCartItem), 
        itemsPerPage: 5})
    );
  }
});
