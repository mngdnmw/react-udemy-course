import React, { Component } from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

class BuildControls extends Component {
  render() {
    const controls = [
      { label: "Salad", type: "salad" },
      { label: "Bacon", type: "bacon" },
      { label: "Cheese", type: "cheese" },
      { label: "Meat", type: "meat" }
    ];
    return (
      <div className={classes.BuildControls}>
        <p>
          Current Price: <strong>{this.props.price.toFixed(2)}</strong>
        </p>
        {controls.map(control => (
          <BuildControl
            key={control.label}
            label={control.label}
            added={() => this.props.ingredientAdded(control.type)}
            removed={() => this.props.ingredientRemoved(control.type)}
            disabled={this.props.disabled[control.type]}
          />
        ))}
        <button
          className={classes.OrderButton}
          disabled={!this.props.purchasable}
          onClick={this.props.ordered}
        >
          ORDER NOW
        </button>
      </div>
    );
  }
}

export default BuildControls;
