var AddDeveloperForm = React.createClass({displayName: "AddDeveloperForm",
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
    return React.createElement("div", {className: "row"}, 
      React.createElement("h2", null, "Add a developer"), 
      React.createElement("form", {className: "form-inline", role: "form"}, 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("input", {
            onChange: this.onUsernameChange, 
            value: this.state.username, 
            type: "text", 
            placeholder: "GitHub Username", 
            className: "form-control"})
        ), 

        React.createElement("br", null), 

        React.createElement("div", {className: "form-group"}, 
          React.createElement("input", {
            onChange: this.onPriceChange, 
            disabled: this.state.inferPriceFromGitHub, 
            value: this.state.price, 
            type: "text", 
            placeholder: "Price", 
            className: "form-control"}), 
          " " + ' ' +
          "or" + ' ' +
          " ", 

          React.createElement("input", {onChange: this.onInferCheckboxChanged, type: "checkbox"}), 

          " " + ' ' +

          "Infer developer price using ", React.createElement("em", null, "GitHub")
        ), 

        React.createElement("br", null), 
        React.createElement("br", null), 

        React.createElement("button", {onClick: this.onClick, type: "submit", className: "btn btn-success"}, "Add")
      )
    );
  }
});
