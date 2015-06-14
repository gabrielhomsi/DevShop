var Totalizer = React.createClass({displayName: "Totalizer",
  getInitialState: function (e) {
    return {
      couponCode: '',
    }
  },

  onCouponCodeChange: function (e) {
    this.setState({
      couponCode: e.target.value
    });
  },

  render: function () {
    var _this = this;

    var couponCodeIsValid = function () {
      return _this.state.couponCode == 'SHIPIT';
    }

    var sumPrices = function (developers) {
      var fold = function (carry, developer) {
        return carry + developer.price;
      };

      var result = _this.props.developers.reduce(fold, 0);

      if (couponCodeIsValid()) {
        result = result * 0.9;
      }

      return result;
    };

    return React.createElement("div", {className: "totalizer row"}, 
      React.createElement("div", {className: "col-sm-5"}, 
        React.createElement("div", {className: "row"}, 
          React.createElement("table", {className: "table"}, 
            React.createElement("tbody", null, 
              React.createElement("tr", {className: "total"}, 
                React.createElement("td", null, "Total"), 
                React.createElement("td", null, "$", sumPrices(this.props.developers))
              ), 
              React.createElement("tr", null, 
                React.createElement("td", null, 
                  React.createElement("label", null, 
                    "Discount Coupon Code"
                  )
                ), 
                React.createElement("td", null, 
                  React.createElement("div", {className: "form-group"}, 
                    React.createElement("input", {
                      value: this.state.couponCode, 
                      onChange: this.onCouponCodeChange, 
                      style: couponCodeIsValid() ? {color: "green", fontWeight: "bold"} : {}, 
                      className: "form-control", 
                      type: "text", 
                      placeholder: "Enter your code here"})
                  )
                )
              )
            )
          )
        )
      )
    )
  }
});
