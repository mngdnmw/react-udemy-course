import React, { Component } from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
//import { withRouter } from "react-router-dom";
class Burger extends Component {
  render() {
    //Way to transform an object of key value pairs to an array of burger ingredients
    //where the keys are the types of ingredients
    //and the value of that object is the quantity of the specified ingredient
    let transformedIngredients = Object.keys(this.props.ingredients)
      .map(igKey => {
        return [...Array(this.props.ingredients[igKey])].map((_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);
    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
      <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    );
  }
}
export default Burger;
