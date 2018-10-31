import React from "react";
import Ingredients from "./Ingredients";
import "./Burger.css";

const burger = props => {
	let transformedIngredients = Object.keys(props.ingredients)
		.map((igKey, index) => {
			return [...Array(props.ingredients[igKey])].map((_, index) => {
				return <Ingredients key={igKey + index} type={igKey} />;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);

	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>start building your burger</p>;
	}

	return (
		<div className="burger">
			<Ingredients type="bread-top" />
			{transformedIngredients}
			<Ingredients type="bread-bottom" />
		</div>
	);
};

export default burger;
