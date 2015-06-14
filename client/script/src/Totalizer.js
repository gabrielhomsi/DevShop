var Totalizer = React.createClass({
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

    return <div className="totalizer row">
      <div className="col-sm-5">
        <div className="row">
          <table className="table">
            <tbody>
              <tr className="total">
                <td>Total</td>
                <td>${sumPrices(this.props.developers)}</td>
              </tr>
              <tr>
                <td>
                  <label>
                    Discount Coupon Code
                  </label>
                </td>
                <td>
                  <div className="form-group">
                    <input
                      value={this.state.couponCode}
                      onChange={this.onCouponCodeChange}
                      style={couponCodeIsValid() ? {color: "green", fontWeight: "bold"} : {}}
                      className="form-control"
                      type="text"
                      placeholder="Enter your code here"/>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  }
});
