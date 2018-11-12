import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate')
    }

    render() {
        const ingredSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                )
            });
        return (
            <Aux>
                <h3>Your order</h3>
                <ul>
                    {ingredSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button buttonType='Success' clicked={this.props.purchaseContinue}>Continue</Button>
                <Button buttonType='Danger' clicked={this.props.purchaseCancel}>Cancel</Button>
            </Aux>
        )
    }
}
export default OrderSummary;