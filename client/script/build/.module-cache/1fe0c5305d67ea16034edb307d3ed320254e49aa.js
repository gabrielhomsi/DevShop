var Totalizer = React.createClass({displayName: "Totalizer",
  render: function() {
    React.createElement("div", {class: "totalizer row"}, 
      React.createElement("div", {class: "col-sm-5"}, 
        React.createElement("div", {class: "row"}, 
          React.createElement("table", {class: "table"}, 
            React.createElement("tbody", null, 
              React.createElement("tr", {class: "total"}, 
                React.createElement("td", null, "Total"), 
                React.createElement("td", null, "$640")
              )
            )
          )
        )
      )
    )
  }
});
