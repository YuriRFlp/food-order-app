import { Fragment, useState } from 'react';
import styles from './CartButton.module.css';
import Cart from '../../Cart/Cart';

const CartButton = (props) => {
    const [cartAvailable, setCartAvailable] = useState(false);

    const cartVisibleHandler = () => {
        if(!cartAvailable){
            setCartAvailable(true);
        } else{
            setCartAvailable(false);
        }
    }

    return(
        <Fragment>
            {cartAvailable && <Cart></Cart>}
            <button type="button" className={styles.cartButton} onClick={cartVisibleHandler}>
                <i className={`fas fa-shopping-cart ${styles['cart-icon']}`}></i>
                <span className={styles.span}>{props.children}</span>
            </button>
        </Fragment>
    );
}

export default CartButton;