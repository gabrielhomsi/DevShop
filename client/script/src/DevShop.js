var DevShop = React.createClass({
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
      if (developer.inferPriceFromGitHub == true) {
        // Since we don't know the new developer's price, another api call is necessary
        _this.reloadDeveloperList();
      } else {
        var nextDevelopers = _this.state.developers.concat([developer]);

        _this.setState({
          developers: nextDevelopers
        });
      }
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
    return <div className="container">
      <Header/>

      <AddDeveloperForm onClick={this.addDeveloper}/>

      <Cart
        developers={this.state.developers}
        handleRemove={this.removeDeveloper}/>

      <Totalizer developers={this.state.developers}/>
    </div>
  }
});
