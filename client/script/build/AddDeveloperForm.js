var AddDeveloperForm = React.createClass({displayName: "AddDeveloperForm",
  getInitialState: function() {
    return {
      username: '',
      price: ''
    }
  },

  onUsernameChange: function(e) {
    this.setState({
      username: e.target.value
    })
  },

  onPriceChange: function(e) {
    this.setState({
      price: e.target.value
    })
  },

  onClick: function(e) {
    // Valid input check
    if (this.state.username == '' || this.state.price == '') {
      return;
    }

    e.preventDefault();

    this.props.onClick({
      username: this.state.username,
      price: parseInt(this.state.price)
    });

    this.setState({
      username: '',
      price: ''
    });
  },

  render: function() {
    return React.createElement("div", {className: "row"}, 
      React.createElement("h2", null, "Add a developer"), 
      React.createElement("form", {className: "form-inline", role: "form"}, 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("input", {onChange: this.onUsernameChange, value: this.state.username, type: "text", placeholder: "GitHub Username", className: "form-control"})
        ), 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("input", {onChange: this.onPriceChange, value: this.state.price, type: "text", placeholder: "Price", className: "form-control"})
        ), 
        React.createElement("button", {onClick: this.onClick, type: "submit", className: "btn btn-success"}, "Add")
      )
    );
  }
});
