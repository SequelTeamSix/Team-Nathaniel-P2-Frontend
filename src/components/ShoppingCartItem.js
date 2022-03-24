import Box from './Box';
import { useDispatch } from 'react-redux'

import "./ShoppingCartItem.css";

export default function ShoppingCartItem(props) {

    const dispatch = useDispatch();

    function removeItemClick() {
        dispatch({type: 'removeFromCart', item: props.cartItem})
    }

    return (
        <Box className='row'>
            <img src={props.cartItem.game.boxArt} className='col-12 col-md-3'  />
            <span className='col-12 col-md-6'>{props.cartItem.game.title}</span>
            <span onClick={removeItemClick} className='col-12 col-md-3'> <Box className='remove-button'>Remove</Box></span>
        </Box>
    )
}