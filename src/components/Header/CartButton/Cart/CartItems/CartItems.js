import ButtonWhite from '../../../../UI/Button/ButtonWhite';
import styles from './CartItems.module.css';

const CartItems = (props) => {
    return(
        <div className={styles.flexRowContainer}>
            <div className={styles.gridContainer}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.text}>${props.price}</p>
                <p className={styles.text}>x{props.amount}</p>
            </div>
            <div className={styles.btnContainer}>
                <ButtonWhite>-</ButtonWhite>
                <ButtonWhite>+</ButtonWhite>
            </div>
        </div>
    );
}

export default CartItems;