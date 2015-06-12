var DevShop = React.createClass({displayName: "DevShop",
  getInitialState: function() {
    return {
      developers: [
        { username: 'brenoc', price: 224 },
        { username: 'firstdoit', price: 416 },
        { username: 'joe', price: 302 },
      ]
    };
  },

  addDeveloper: function(developer) {
    var nextDevelopers = this.state.developers.concat([developer]);

    this.setState({
      developers: nextDevelopers
    })
  },

  render: function() {
    return React.createElement("div", {className: "container"}, 
      React.createElement(Header, null), 
      React.createElement(AddDeveloperForm, {onClick: this.addDeveloper}), 
      React.createElement(Cart, {developers: this.state.developers}), 
      React.createElement(Totalizer, {developers: this.state.developers})
    )
  }
});
