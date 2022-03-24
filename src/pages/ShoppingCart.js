import {useSelector} from "react-redux";
import ShoppingCartItem from "../components/ShoppingCartItem";
import Box from "../components/Box";


function ShoppingCart() {
    const shoppingCart = useSelector((state) => state.shoppingCart);
    const user = useSelector((state) => state.user);

    function checkout() {
        const purchase = {}
        const body = JSON.stringify(purchase);
        // fetch('https://teamnathanielrevatureproject2.azurewebsites.net/savePurchases', {method: 'post',
        // body: body, headers: {'Content-Type': 'application/json'}})
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
                    <span><Box>Checkout</Box></span>}
            </div>
        </div>
    )
}

export default ShoppingCart;