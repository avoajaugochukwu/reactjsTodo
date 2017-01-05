// Export Component so it can be used in learn.js

export default class Layout extends React.Component {
  // You can use constructors, but you have to call super()
  constructor() {
    super();
  }
  getVal() {
    return "Ugo";
  }
  render() {
    return (
      <h1>Its {this.getVal()}</h1>
    );
  }
}
