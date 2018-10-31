import React from "react";
import LogoImg from "../assets/burger-logo.png";
import "./Logo.css";

const logo = props => (
	<div className="Logo" style={{ height: props.height }}>
		<img src={LogoImg} alt="Burger Logo" />
	</div>
);

export default logo;
