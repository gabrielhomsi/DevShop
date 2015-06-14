var Cart = React.createClass({
  handleRemove: function (i) {
    this.props.handleRemove(i);
  },

  render: function () {
    var _this = this;

    var createCartItem = function (developer, i) {
      return {
        Username: developer.username,
        Price: "$" + developer.price
      };
    };

    return <div className="cart row">
      <h2>Cart</h2>
      <Reactable.Table
        className="table"
        data={this.props.developers.map(createCartItem)}
        itemsPerPage={5}/>
    </div>;
  }
});
