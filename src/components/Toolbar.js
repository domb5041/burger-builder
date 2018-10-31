import React from "react";
import "./Toolbar.css";
import Logo from "./Logo";
import NavItems from "./NavItems";
import DrawerToggle from "./DrawerToggle";

const toolbar = props => (
	<header className="Toolbar">
		<DrawerToggle opened={props.opened} />

		<Logo height="80%" />
		<nav className="DesktopOnly">
			<NavItems />
		</nav>
	</header>
);

export default toolbar;
