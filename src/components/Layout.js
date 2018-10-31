import React, { Component } from "react";
import Aux from "../hoc/Aux";
import "./Layout.css";
import Toolbar from "./Toolbar";
import SideDrawer from "./SideDrawer";

class Layout extends Component {
	state = {
		showSideDrawer: false
	};

	SideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	SideDrawerToggleHandler = () => {
		this.setState(prevState => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};

	render() {
		return (
			<Aux>
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.SideDrawerClosedHandler}
				/>
				<Toolbar opened={this.SideDrawerToggleHandler} />
				<main className="content">{this.props.children}</main>
			</Aux>
		);
	}
}

export default Layout;
