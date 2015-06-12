var AddDeveloperForm = React.createClass({displayName: "AddDeveloperForm",
  getInitialState: function() {
    return {
      username: '',
      price: ''
    }
  },

  onUsernameChange: function() {
    this.setState({
      username: e.target.value
    })
  },

  onPriceChange: function() {
    this.setState({
      username: e.target.value
    })
  },

  render: function() {
    return React.createElement("div", {className: "row"}, 
      React.createElement("h2", null, "Add a developer"), 
      React.createElement("form", {className: "form-inline", role: "form"}, 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("input", {onChange: this.onUsernameChange, type: "text", placeholder: "GitHub Username", className: "form-control"})
        ), 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("input", {onChange: this.onPriceChange, type: "text", placeholder: "Price", className: "form-control"})
        ), 
        React.createElement("button", {type: "submit", className: "btn btn-success"}, "Add")
      )
    );
  }
});
