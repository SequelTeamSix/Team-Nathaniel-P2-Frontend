import {useSelector} from "react-redux";
import ShoppingCartItem from "../components/ShoppingCartItem";


function ShoppingCart() {
    const shoppingCart = useSelector((state) => state.shoppingCart);

    function cartContents() {
        if(shoppingCart.length === 0) {
            return <h2>Nothing in the cart</h2>
        } else {
            let cart = '';
            for(let item in shoppingCart) {
                cart += <ShoppingCartItem boxArt={item.game.boxArt} name={item.game.name} />
            }
            return cart;
        }
    }
    return (
        <div>
            <div>Shopping Cart</div>
            <div>
                {cartContents()}
            </div>
        </div>
    )
}

export default ShoppingCart;