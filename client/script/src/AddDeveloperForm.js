var AddDeveloperForm = React.createClass({
  getInitialState: function () {
    return {
      username: '',
      price: ''
    }
  },

  onUsernameChange: function (e) {
    this.setState({
      username: e.target.value
    })
  },

  onPriceChange: function (e) {
    this.setState({
      price: e.target.value
    })
  },

  onClick: function (e) {
    e.preventDefault();
    
    // Valid input check
    if (this.state.username == '' || this.state.price == '') {
      return;
    }

    this.props.onClick({
      username: this.state.username,
      price: parseInt(this.state.price)
    });

    this.setState({
      username: '',
      price: ''
    });
  },

  render: function () {
    return <div className="row">
      <h2>Add a developer</h2>
      <form className="form-inline" role="form">
        <div className="form-group">
          <input onChange={this.onUsernameChange} value={this.state.username} type="text" placeholder="GitHub Username" className="form-control"/>
        </div>
        <div className="form-group">
          <input onChange={this.onPriceChange} value={this.state.price} type="text" placeholder="Price" className="form-control"/>
        </div>
        <button onClick={this.onClick} type="submit" className="btn btn-success">Add</button>
      </form>
    </div>;
  }
});
