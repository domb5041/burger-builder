import React, { Component } from "react";
import "./App.css";

import Layout from "./components/Layout";
import BurgerBuilder from "./components/BurgerBuilder";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<BurgerBuilder />
				</Layout>
			</div>
		);
	}
}

export default App;
