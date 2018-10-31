import React from "react";
import "./Backdrop.css";

const backdrop = props => (
	<div
		style={{
			opacity: props.show ? "1" : "0",
			pointerEvents: props.show ? "all" : "none"
		}}
		className="Backdrop"
		onClick={props.hide}
	/>
);

export default backdrop;
