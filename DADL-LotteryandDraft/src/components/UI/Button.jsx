import classes from './Button.module.css';

const Button = (props) => {
  console.log(props.disableBtn)
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disableBtn}
    >
      {props.children}
    </button>
  );
};

export default Button;
