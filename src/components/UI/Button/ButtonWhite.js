import styles from './Button.module.css';

const ButtonWhite = (props) => {
    return(
        <button 
            className={styles.buttonWhite}
            type="sumit"
            onClick={props.onClick}>
                {props.children}
        </button>
    );
}

export default ButtonWhite;