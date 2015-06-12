var developers = [
  { username: 'brenoc', price: 224 },
  { username: 'firstdoit', price: 416 },
  { username: 'joe', price: 302 }
];

React.render(
  <DevShop developers={developers}/>,
  document.getElementById("dev-shop")
);
