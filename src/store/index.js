import {createStore} from 'redux';

const applicationReducer = (state = {user: {}, shoppingCart: []}, action) => {
    //console.log(state);
    switch (action.type) {
        case 'login':
            return {
                shoppingCart: state.shoppingCart,
                user: action.user
            };
            break;
        case 'logout':
            return {
                shoppingCart: state.shoppingCart,
                user: {}
            }
            break;
        case 'addToCart':
            return {
                user: state.user,
                shoppingCart: [...state.shoppingCart, action.gamePurchase]
            }
            break;
        case 'removeFromCart':
            const newCart = state.shoppingCart.filter(item => item.game.gameId !== action.item.game.gameId);
            return {
                user: state.user,
                shoppingCart: newCart
            }
            break;
        case 'emptyCart':
            return {
                user: state.user,
                shoppingCart: []
            }
            break;

    }
    return state;
}

const store = createStore(applicationReducer);

export default store;