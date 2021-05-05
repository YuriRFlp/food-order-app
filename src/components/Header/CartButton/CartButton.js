import { Fragment, useState } from 'react';
import styles from './CartButton.module.css';
import Cart from '../CartButton/Cart/Cart';
import Backdrop from '../../UI/Backdrop/Backdrop';

const CartButton = (props) => {
    const [cartAvailable, setCartAvailable] = useState(false);

    const cartVisibleHandler = () => {
        if(!cartAvailable){
            setCartAvailable(true);
        } else{
            setCartAvailable(false);
        }
    }

    const liftingSubtractHandler = foodTitle => {
        props.onSubtract(foodTitle);
    };

    const liftingAddHandler = foodTitle => {
        props.onAdd(foodTitle);
    };

    return(
        <Fragment>
            {cartAvailable && 
                <Cart 
                    onClick={cartVisibleHandler} 
                    onSubtract={liftingSubtractHandler}
                    onAdd={liftingAddHandler}
                />
            }
            {cartAvailable && <Backdrop/>}
            <button type="button" className={styles.cartButton} onClick={cartVisibleHandler}>
                <i className={`fas fa-shopping-cart ${styles['cart-icon']}`}></i>
                <span className={styles.span}>{props.children}</span>
            </button>
        </Fragment>
    );
}

export default CartButton;