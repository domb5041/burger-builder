import React from "react";
import NavItem from "./NavItem";
import "./NavItems.css";

const navItems = () => (
	<ul className="NavItems">
		<NavItem link="/" active>
			Builder
		</NavItem>
		<NavItem link="/">Checkout</NavItem>
	</ul>
);

export default navItems;
