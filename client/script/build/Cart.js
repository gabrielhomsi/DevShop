var Cart = React.createClass({displayName: "Cart",
  handleRemove: function (i) {
    this.props.handleRemove(i);
  },

  render: function () {
    var _this = this;

    var createCartItem = function (developer, i) {
      return React.createElement("tr", {className: "product"}, 
        React.createElement("td", null, developer.username), 
        React.createElement("td", null, "$", developer.price), 
        React.createElement("td", null, React.createElement("button", {onClick: _this.handleRemove.bind(_this, i), className: "btn btn-danger pull-right"}, "Remove"))
      );
    };

    return React.createElement("div", {className: "cart row"}, 
      React.createElement("h2", null, "Cart"), 
      React.createElement("table", {className: "table"}, 
        React.createElement("thead", null, 
          React.createElement("tr", null, 
            React.createElement("th", null, "Username"), 
            React.createElement("th", null, "Price"), 
            React.createElement("th", null)
          )
        ), 
        React.createElement("tbody", null, 
          this.props.developers.map(createCartItem)
        )
      )
    );
  }
});
