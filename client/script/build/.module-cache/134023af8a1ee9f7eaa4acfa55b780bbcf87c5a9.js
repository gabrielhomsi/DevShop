var AddDeveloperForm = React.createClass({displayName: "AddDeveloperForm",
  render: function() {
    return React.createElement("div", {className: "row"}, 
      React.createElement("h2", null, "Add a developer"), 
      React.createElement("form", {className: "form-inline", role: "form"}, 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("input", {type: "text", placeholder: "GitHub Username", className: "form-control"})
        ), 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("input", {type: "text", placeholder: "Price", className: "form-control"})
        ), 
        React.createElement("button", {type: "submit", className: "btn btn-success"}, "Add")
      )
    );
  }
});
