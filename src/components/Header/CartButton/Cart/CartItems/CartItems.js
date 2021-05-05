import ButtonWhite from '../../../../UI/Button/ButtonWhite';
import styles from './CartItems.module.css';

const CartItems = (props) => {
    const subtractHandler = (event) => {
        props.onSubtract(event.target.parentNode.parentNode.firstChild.firstChild.textContent);
        props.onCalc();
    };

    const addHandler = (event) => {
        props.onAdd(event.target.parentNode.parentNode.firstChild.firstChild.textContent);
        props.onCalc();
    };

    return(
        <div className={styles.flexRowContainer}>
            <div className={styles.gridContainer}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.text}>${props.price}</p>
                <p className={styles.text}>x{props.amount}</p>
            </div>
            <div className={styles.btnContainer}>
                <ButtonWhite onClick={!(props.amount === 0) ? subtractHandler : undefined}>-</ButtonWhite>
                <ButtonWhite onClick={addHandler}>+</ButtonWhite>
            </div>
        </div>
    );
}

export default CartItems;