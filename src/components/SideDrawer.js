import React from "react";
import Logo from "./Logo";
import NavItems from "../components/NavItems";
import "./SideDrawer.css";
import Backdrop from "./Backdrop";
import Aux from "../hoc/Aux";

const sideDrawer = props => {
	let attachedClasses = ["SideDrawer", "Close"];
	if (props.open) {
		attachedClasses = ["SideDrawer", "Open"];
	} else {
		attachedClasses = ["SideDrawer", "Close"];
	}
	return (
		<Aux>
			<Backdrop show={props.open} hide={props.closed} />
			<div className={attachedClasses.join(" ")}>
				<Logo height="10%" />
				<nav>
					<NavItems />
				</nav>
			</div>
		</Aux>
	);
};

export default sideDrawer;
