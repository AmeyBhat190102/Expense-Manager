import './Card.css'

const Card = (props) => {
    // we cannot directly add classes to our custom components, we have to add it manually 
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}
//  children is reserved and every prop receives this by default
export default Card;
