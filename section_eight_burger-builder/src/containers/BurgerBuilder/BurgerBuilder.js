import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axiosOrderInstance from '../../axios/axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 1.2,
    bacon: 2.5,
    meat: 2.7,
    cheese: 0.2
}
class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 0,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axiosOrderInstance.get('/ingredients.json')
            .then(res => {
                this.setState({ ingredients: res.data })
            })
            .catch(
                error => { this.setState({ error: true }) }
            );
    }
    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => { return ingredients[igKey] })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const priceSubtraction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubtraction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);

    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {

        this.setState({ loading: true });
        //alert('Continuing');
        const order = {
            ingredients: this.state.ingredients,
            // in production this would be calculated server side so user cannot manipluate price
            price: this.state.totalPrice,
            customer: {
                street: '1 jdjj',
                zipCode: '1333',
                country: 'iceland'
            },
            email: 'hhfd@gnaim.com',
            deliveryMethod: 'fastest'
        }
        axiosOrderInstance.post('/orders.json', order)
            .then(
                response => { this.setState({ loading: false, purchasing: false }) }
            ).catch(
                error => { this.setState({ loading: false, purchasing: false }) }
            );
    }
    render() {
        const disableInfo = {
            ...this.state.ingredients
        };

        let orderSummary = null;

        let burger = this.state.error ? <p>Ingredients cannot be loaded</p> : <Spinner />;
        if (this.state.ingredients) {
            burger = (<Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disableInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    purchasing={this.purchaseHandler}
                /></Aux>);
            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                purchaseCancel={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler}
                price={this.state.totalPrice}
            />;


        }

        if (this.state.loading) {
            orderSummary = <Spinner />
        }


        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}

            </Aux>
        )
    }
}
export default withErrorHandler(BurgerBuilder, axiosOrderInstance);