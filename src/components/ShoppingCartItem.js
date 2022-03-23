import Box from './Box';

export default function ShoppingCartItem(props) {

    return (
        <div>
            <img src={props.boxArt} />
            {props.name}
            <Box>Remove</Box>
        </div>
    )
}