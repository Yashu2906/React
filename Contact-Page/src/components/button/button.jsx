import styles from "./button.module.css";

function Button(props) {
  return (
    <div>
      <button
        className={props.isOutline ? styles.Outline_btn : styles.primary_btn}
      >
        {props.icon}
        {props.text}
      </button>
    </div>
  );
}

export default Button;
