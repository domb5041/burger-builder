import React, { Component } from "react";
import propTypes from "prop-types";
import "./Ingredients.css";

class Ingredients extends Component {
	render() {
		let ingredient = null;
		switch (this.props.type) {
			case "bread-bottom":
				ingredient = <div className="BreadBottom" />;
				break;
			case "bread-top":
				ingredient = (
					<div className="BreadTop">
						<div className="Seeds1" />
						<div className="Seeds2" />
					</div>
				);
				break;
			case "meat":
				ingredient = <div className="Meat" />;
				break;
			case "cheese":
				ingredient = <div className="Cheese" />;
				break;
			case "salad":
				ingredient = <div className="Salad" />;
				break;
			case "bacon":
				ingredient = <div className="Bacon" />;
				break;
			default:
				ingredient = null;
		}
		return ingredient;
	}
}

Ingredients.propTypes = {
	type: propTypes.string.isRequired
};

export default Ingredients;
