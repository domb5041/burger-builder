import React from "react";
import "./BuildControl.css";

const buildControl = props => (
	<div className="BuildControl">
		<button className="Less" onClick={props.remove} disabled={props.disabled}>
			-
		</button>
		<div className="Label">{props.label}</div>
		<button className="More" onClick={props.add}>
			+
		</button>
	</div>
);

export default buildControl;
