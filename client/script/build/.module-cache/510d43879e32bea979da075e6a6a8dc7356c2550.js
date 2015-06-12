var DevShop = React.createClass({displayName: "DevShop",
  render: function() {
    return React.createElement("div", {className: "container"}, 
      React.createElement(Header, null), 
      React.createElement(AddDeveloperForm, null), 
      React.createElement(Cart, null), 
      React.createElement(Totalizer, null)
    )
  }
});
