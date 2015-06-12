var DevShop = React.createClass({displayName: "DevShop",
  render: function() {
    React.createElement("div", {class: "container"}, 
      React.createElement(Header, null), 
      React.createElement(AddDeveloperForm, null), 
      React.createElement(Cart, null)
    )
  }
});
