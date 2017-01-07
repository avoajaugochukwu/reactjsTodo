class Layout extends React.Component {
	render() {
		return (
			<h1>News App</h1>
		);
	}
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);