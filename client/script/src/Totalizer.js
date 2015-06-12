var Totalizer = React.createClass({
  render: function() {
    var sumPrice = function (carry, developer) {
      return carry + developer.price;
    };

    return <div className="totalizer row">
      <div className="col-sm-5">
        <div className="row">
          <table className="table">
            <tbody>
              <tr className="total">
                <td>Total</td>
                <td>${this.props.developers.reduce(sumPrice, 0)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  }
});
