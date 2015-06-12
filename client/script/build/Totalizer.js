var Totalizer = React.createClass({displayName: "Totalizer",
  render: function () {
    var sumPrice = function (carry, developer) {
      return carry + developer.price;
    };

    return React.createElement("div", {className: "totalizer row"}, 
      React.createElement("div", {className: "col-sm-5"}, 
        React.createElement("div", {className: "row"}, 
          React.createElement("table", {className: "table"}, 
            React.createElement("tbody", null, 
              React.createElement("tr", {className: "total"}, 
                React.createElement("td", null, "Total"), 
                React.createElement("td", null, "$", this.props.developers.reduce(sumPrice, 0))
              )
            )
          )
        )
      )
    )
  }
});
