class Header extends React.Component {
  render() {
    return (
      <header>Header</header>
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
    this.state = {name: "Ugochukwu"};
  }
  getVal() {
    return "Ugo";
  }
  render() {
    setTimeout(() => {
      this.setState({name: "Johnson"});
    }, 1000)
    return (
      <div>
        <Header/>
        <h1>Its {this.getVal()}</h1>
        <h1>Its {this.state.name}</h1>
        <Footer/>
      </div>
    );
  }
}


const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
