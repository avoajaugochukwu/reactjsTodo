class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  render() {
    return (
      <div>
        <header>Header {this.props.title}</header>
        <input onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>footer</footer>
    );
  }
}


class Layout extends React.Component {
  // You can use constructors, but you have to call super()

  constructor() {
    super();
    this.state = {name: "Ugochukwu", title: "Money man"};
  }
  getVal() {
    return "Ugo";
  }
  changeTitle(title) {
    this.setState({title});
  }
  render() {
    const title = "Welcome my evil Lord Ugo";
    setTimeout(() => {
      this.setState({name: "Johnson"});
    }, 1000)
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        <h1>Its {this.getVal()}</h1>
        <h1>Its {this.state.name}</h1>
        <Footer/>
      </div>
    );
  }
}


const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
