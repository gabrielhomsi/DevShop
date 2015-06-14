var AddDeveloperForm = React.createClass({
  getInitialState: function () {
    return {
      username: '',
      price: '',
      inferPriceFromGitHub: false
    }
  },

  onUsernameChange: function (e) {
    this.setState({
      // Current username value
      username: e.target.value
    })
  },

  onPriceChange: function (e) {
    this.setState({
      // Current price value
      price: e.target.value
    })
  },

  onInferCheckboxChanged: function (e) {
    this.setState({
      price: '',
      inferPriceFromGitHub: e.target.checked
    });
  },

  onClick: function (e) {
    // Preventing submit event
    e.preventDefault();

    // Valid input check
    if (this.state.username == '' ||
      (this.state.inferPriceFromGitHub && false == this.state.price == '')) {
      return;
    }

    this.props.onClick({
      username: this.state.username,
      price: parseInt(this.state.price),
      inferPriceFromGitHub: this.state.inferPriceFromGitHub
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
          <input
            onChange={this.onUsernameChange}
            value={this.state.username}
            type="text"
            placeholder="GitHub Username"
            className="form-control"/>
        </div>

        <br/>

        <div className="form-group">
          <input
            onChange={this.onPriceChange}
            disabled={this.state.inferPriceFromGitHub}
            value={this.state.price}
            type="text"
            placeholder="Price"
            className="form-control"/>
          &nbsp;
          or
          &nbsp;

          <input onChange={this.onInferCheckboxChanged} type="checkbox"/>

          &nbsp;

          Infer developer price using <em>GitHub</em>
        </div>

        <br/>
        <br/>

        <button onClick={this.onClick} type="submit" className="btn btn-success">Add</button>
      </form>
    </div>;
  }
});
