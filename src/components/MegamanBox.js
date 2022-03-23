import './MegamanBox.css';

function MegamanBox (props) {
    const classes = props.className + ' megamanbox';
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default MegamanBox;