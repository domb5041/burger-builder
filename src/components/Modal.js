import React, { Component } from "react";
import "./Modal.css";
import Aux from "../hoc/Aux";
import Backdrop from "./Backdrop";

class Modal extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.show !== this.props.show;
	}

	componentWillUpdate() {
		console.log("[Modal] WillUpdate");
	}

	render() {
		return (
			<Aux>
				<Backdrop show={this.props.show} hide={this.props.hide} />
				<div
					className="Modal"
					style={{
						transform: this.props.show
							? "translateY(0)"
							: "translateY(-100vh)",
						opacity: this.props.show ? "1" : "0"
					}}
				>
					{this.props.children}
				</div>
			</Aux>
		);
	}
}

export default Modal;
