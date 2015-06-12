var DevShop = React.createClass({displayName: "DevShop",
  getInitialState: function() {
    return {
      developers: [
        { username: 'brenoc', price: 224 },
        { username: 'firstdoit', price: 416 },
      ]
    };
  },

  render: function() {
    return React.createElement("div", {className: "container"}, 
      React.createElement(Header, null), 
      React.createElement(AddDeveloperForm, null), 
      React.createElement(Cart, null), 
      React.createElement(Totalizer, null)
    )
  }
});
