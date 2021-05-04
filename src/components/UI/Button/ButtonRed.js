import styles from './Button.module.css';

const ButtonRed = (props) => {
    return <button className={styles.buttonRed} type="sumit">{props.children}</button>;
}

export default ButtonRed;