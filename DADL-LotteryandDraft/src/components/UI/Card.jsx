import classes from './Card.module.css';

const Card = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;


    // <div className={`${classes.card} ${props.className}`}>{props.children}</div>