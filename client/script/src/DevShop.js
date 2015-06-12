var DevShop = React.createClass({
  getInitialState: function () {
    return {
      developers: [
        { username: 'brenoc', price: 224 },
        { username: 'firstdoit', price: 416 },
        { username: 'joe', price: 302 },
      ]
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
    return <div className="container">
      <Header/>
      <AddDeveloperForm onClick={this.addDeveloper}/>
      <Cart developers={this.state.developers} handleRemove={this.removeDeveloper}/>
      <Totalizer developers={this.state.developers}/>
    </div>
  }
});
