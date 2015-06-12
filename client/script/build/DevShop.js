var DevShop = React.createClass({displayName: "DevShop",
  getInitialState: function () {
    return {
      developers: this.props.developers
    };
  },

  addDeveloper: function (developer) {
    var nextDevelopers = this.state.developers.concat([developer]);

    this.setState({
      developers: nextDevelopers
    });
  },

  removeDeveloper: function (index) {
    var nextDevelopers = this.state.developers;

    nextDevelopers.splice(index, 1);

    this.setState({
      developers: nextDevelopers
    });
  },

  render: function () {
    return React.createElement("div", {className: "container"}, 
      React.createElement(Header, null), 
      React.createElement(AddDeveloperForm, {onClick: this.addDeveloper}), 
      React.createElement(Cart, {developers: this.state.developers, handleRemove: this.removeDeveloper}), 
      React.createElement(Totalizer, {developers: this.state.developers})
    )
  }
});
