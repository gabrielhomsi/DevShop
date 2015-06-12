var Cart = React.createClass({displayName: "Cart",
  render: function() {
    return React.createElement("div", {class: "cart row"}, 
      React.createElement("h2", null, "Cart"), 
      React.createElement("table", {class: "table"}, 
        React.createElement("thead", null, 
          React.createElement("tr", null, 
            React.createElement("th", null, "Username"), 
            React.createElement("th", null, "Price"), 
            React.createElement("th", null)
          )
        ), 
        React.createElement("tbody", null, 
          React.createElement("tr", {class: "product"}, 
            React.createElement("td", null, "brenoc"), 
            React.createElement("td", null, "$224"), 
            React.createElement("td", null, React.createElement("button", {class: "btn btn-danger pull-right"}, "Remove"))
          ), 
          React.createElement("tr", {class: "product"}, 
            React.createElement("td", null, "firstdoit"), 
            React.createElement("td", null, "$416"), 
            React.createElement("td", null, React.createElement("button", {class: "btn btn-danger pull-right"}, "Remove"))
          )
        )
      )
    );
  }
});
