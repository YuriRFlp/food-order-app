import ButtonWhite from '../../../../UI/Button/ButtonWhite';
import ButtonRed from '../../../../UI/Button/ButtonRed';
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

    const deleteHandler = (event) => {
        props.onDelete(event.target.parentNode.parentNode.firstChild.firstChild.textContent);
        props.onCalc();
    }

    return(
        <div className={styles.flexRowContainer}>
            <div className={styles.gridContainer}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.text}>${props.price}</p>
                <p className={styles.text}>x{props.amount}</p>
            </div>
            <div className={styles.btnContainer}>
                <ButtonWhite onClick={subtractHandler}>-</ButtonWhite>
                <ButtonWhite onClick={addHandler}>+</ButtonWhite>
                <ButtonRed onClick={deleteHandler}>Delete</ButtonRed>
            </div>
        </div>
    );
}

export default CartItems;