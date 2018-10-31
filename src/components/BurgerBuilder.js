import React, { Component } from "react";
import Aux from "../hoc/Aux";
import Burger from "./Burger";
import BuildControls from "./BuildControls";
import Modal from "./Modal";
import OrderSummary from "./OrderSummary";

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4,
		purchasable: 0,
		purchasing: false
	};

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map(igKey => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		this.setState({ purchasable: sum > 0 });
	}

	ingredientControlHandler = (type, control) => {
		let ingredients = { ...this.state.ingredients };
		let totalPrice = this.state.totalPrice;
		if (control === "add") {
			ingredients[type]++;
			totalPrice += INGREDIENT_PRICES[type];
		} else if (ingredients[type] > 0) {
			ingredients[type]--;
			totalPrice -= INGREDIENT_PRICES[type];
		}
		this.setState({ totalPrice: totalPrice, ingredients: ingredients });
		this.updatePurchaseState(ingredients);
	};

	orderNowHandler = () => {
		this.setState({ purchasing: !this.state.purchasing });
	};

	purchaseContinueHandler = () => {
		alert("You continue");
	};

	render() {
		const disabledInfo = { ...this.state.ingredients };
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] === 0;
		}
		return (
			<Aux>
				<Modal show={this.state.purchasing} hide={this.orderNowHandler}>
					<OrderSummary
						ingredients={this.state.ingredients}
						hide={this.orderNowHandler}
						continue={this.purchaseContinueHandler}
						price={this.state.totalPrice}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					controls={this.ingredientControlHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchasable={this.state.purchasable}
					purchasing={this.orderNowHandler}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
