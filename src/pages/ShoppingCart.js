import {useSelector, useDispatch} from "react-redux";
import ShoppingCartItem from "../components/ShoppingCartItem";
import Box from "../components/Box";


function ShoppingCart() {
    const shoppingCart = useSelector((state) => state.shoppingCart);
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

    function checkout() {
        const date = new Date().toString();

        const purchase = { orderDate: date, customer: user, gameOrders: shoppingCart  };
        const body = JSON.stringify(purchase);
        console.log(body);
         fetch('https://teamnathanielrevatureproject2.azurewebsites.net/savePurchase', {method: 'post',
         body: body, headers: {'Content-Type': 'application/json'}}).then((response) => {
             console.log(response)
             return response.json();
         }).then((data) => {
             alert('Order made');
             dispatch({type: 'emptyCart'});
         })
    }

    return (
        <div>
            <div>Shopping Cart</div>
            <div className='container'>
                {shoppingCart.length === 0 ? <h2>Nothing in the cart</h2> :
                shoppingCart.map(cartItem => (<ShoppingCartItem key={cartItem.game.gameId} cartItem={cartItem} />))}
            </div>
            <div>
                {shoppingCart.length > 0 && Object.keys(user).length > 0 &&
                    <span onClick={checkout}><Box>Checkout</Box></span>}
            </div>
        </div>
    )
}

export default ShoppingCart;