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
      var nextDevelopers = this.state.developers.concat([developer]);

      this.setState({
        developers: nextDevelopers
      });
    });
  },

  removeDeveloper: function (index) {
    return $.ajax({
      type: 'DELETE',
      url: '/api/developers/',
      data: { index: index },
      success: function () {
        var nextDevelopers = this.state.developers;

        nextDevelopers.splice(index, 1);

        this.setState({
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
