// app

Var App = React.createClass({
  getInitialState: function () {
    /* set initial state */
    return {
      bgColor: "teal"
    }
  },

  /* changes state */
  handleColorChange: function () {
    // when we state directly, react doesn't know
    // about it, that is why we use setState
    this.setState({bgColor: color});
  },
  /* update the lifecycle method */
  updateBackgroundColor: function () {
    var body = document.querySelector('body');
    body.style.background = this.state.bgColor;
  },

  // lifecycle method
  componentDidMount: function () {
    this.updateBackgroundColor();
  },
  componentDidUpdate: function () {
    this.updateBackgroundColor();
  },

  render: function () {
    return (
      // by calling the title here on the component, we can access this
      <div className="foo">
        <h1>Hello,World</h1>
        <label>What color?
          <colorPicker value={this.state.bgColor}
        </label>
      </div>
    )
  }





});
