var DevShop = React.createClass({displayName: "DevShop",
  getInitialState: function () {
    return {
      developers: []
    };
  },

  // Reload state from the server
  reloadDeveloperList: function () {
    var _this = this;

    $.get('/api/developers/', function (developers) {
      if (_this.isMounted()) {
        _this.setState({
          developers: developers
        })
      }
    });
  },

  componentDidMount: function () {
    this.reloadDeveloperList();
  },

  addDeveloper: function (developer) {
    var _this = this;

    $.post('/api/developers/', developer, function () {
      var nextDevelopers = _this.state.developers.concat([developer]);

      _this.setState({
        developers: nextDevelopers
      });
    });
  },

  removeDeveloper: function (index) {
    var _this = this;

    return $.ajax({
      type: 'DELETE',
      url: '/api/developers/' + index,
      data: { index: index },
      success: function () {
        var nextDevelopers = _this.state.developers;

        nextDevelopers.splice(index, 1);

        _this.setState({
          developers: nextDevelopers
        });
      },
    });
  },

  render: function () {
    return React.createElement("div", {className: "container"}, 
      React.createElement(Header, null), 

      React.createElement(AddDeveloperForm, {onClick: this.addDeveloper}), 

      React.createElement(Cart, {
        developers: this.state.developers, 
        handleRemove: this.removeDeveloper}), 

      React.createElement(Totalizer, {developers: this.state.developers})
    )
  }
});
