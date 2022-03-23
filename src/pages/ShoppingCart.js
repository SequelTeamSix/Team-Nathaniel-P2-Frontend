import {useSelector} from "react-redux";
import ShoppingCartItem from "../components/ShoppingCartItem";


function ShoppingCart() {
    const shoppingCart = useSelector((state) => state.shoppingCart);

    function cartContents() {

        if(shoppingCart.length === 0) {
            return <h2>Nothing in the cart</h2>
        } else {
            let cart = '';
            for(let index = 0; index < shoppingCart.length; index++) {
                let item = shoppingCart[index];
                console.log(item.game);
                cart += <ShoppingCartItem boxArt={item.game.boxArt} name={item.game.name} />
            }
            console.log(cart);
            return cart;
        }
    }
    return (
        <div>
            <div>Shopping Cart</div>
            <div className='container'>
                {shoppingCart.length === 0 ? <h2>Nothing in the cart</h2> :
                shoppingCart.map(cartItem => (<ShoppingCartItem key={cartItem.game.gameId} cartItem={cartItem} />))}
            </div>
        </div>
    )
}

export default ShoppingCart;