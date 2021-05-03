import styles from './Button.module.css';

const Button = (props) => {
    return <button className={styles.button} type="sumit">{props.children}</button>;
}

export default Button;