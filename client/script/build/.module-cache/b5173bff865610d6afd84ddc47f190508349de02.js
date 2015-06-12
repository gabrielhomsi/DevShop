var Cart = React.createClass({displayName: "Cart",
  render: function() {
    var createCartItem = function (developer) {
      return React.createElement("tr", {className: "product"}, 
        React.createElement("td", null, developer.username), 
        React.createElement("td", null, "$", developer.price), 
        React.createElement("td", null, React.createElement("button", {className: "btn btn-danger pull-right"}, "Remove"))
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
