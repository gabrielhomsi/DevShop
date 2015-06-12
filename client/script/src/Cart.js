var Cart = React.createClass({
  render: function() {
    var createCartItem = function (developer) {
      return <tr className="product">
        <td>{developer.username}</td>
        <td>${developer.price}</td>
        <td><button className="btn btn-danger pull-right">Remove</button></td>
      </tr>;
    };

    return <div className="cart row">
      <h2>Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.developers.map(createCartItem)}
        </tbody>
      </table>
    </div>;
  }
});
