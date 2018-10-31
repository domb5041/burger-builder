import React, { Component } from "react";
import Aux from "../hoc/Aux";
import Button from "./Button";

class OrderSummary extends Component {
	// could be a functional component

	componentWillUpdate() {
		console.log("[OrderSummary] WillUpdate");
	}
	render() {
		const ingredientSummary = Object.keys(this.props.ingredients).map(
			igKey => {
				return (
					<li key={igKey}>
						<span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
						{this.props.ingredients[igKey]}
					</li>
				);
			}
		);
		return (
			<Aux>
				<h3>Your Order</h3>
				<p>A burger with the following ingredients:</p>
				<ul>{ingredientSummary}</ul>
				<p>
					<strong>Total Price: ${this.props.price.toFixed(2)}</strong>
				</p>
				<p>Continue to Checkout?</p>
				<Button clicked={this.props.hide} btnType="Danger">
					CANCEL
				</Button>
				<Button clicked={this.props.continue} btnType="Success">
					CONTINUE
				</Button>
			</Aux>
		);
	}
}

export default OrderSummary;
