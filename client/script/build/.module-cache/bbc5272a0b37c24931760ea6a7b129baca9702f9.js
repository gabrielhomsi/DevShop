var AddDeveloperForm = React.createClass({displayName: "AddDeveloperForm",
  render: function() {
    return React.createElement("div", {class: "row"}, 
      React.createElement("h2", null, "Add a developer"), 
      React.createElement("form", {class: "form-inline", role: "form"}, 
        React.createElement("div", {class: "form-group"}, 
          React.createElement("input", {type: "text", placeholder: "GitHub Username", class: "form-control"})
        ), 
        React.createElement("div", {class: "form-group"}, 
          React.createElement("input", {type: "text", placeholder: "Price", class: "form-control"})
        ), 
        React.createElement("button", {type: "submit", class: "btn btn-success"}, "Add")
      )
    );
  }
});
