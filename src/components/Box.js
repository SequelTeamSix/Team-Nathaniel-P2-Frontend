import './Box.css';

function Box (props) {
    const classes = props.className + ' box';
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Box;