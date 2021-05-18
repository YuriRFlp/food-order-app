import { Fragment, useState, useContext } from 'react';
import FoodListContext from '../../../store/cart-context';
import styles from './CartButton.module.css';
import Cart from '../CartButton/Cart/Cart';
import Backdrop from '../../UI/Backdrop/Backdrop';

const CartButton = (props) => {
    const ctx = useContext(FoodListContext);
    const [cartAvailable, setCartAvailable] = useState(false);
    const [totalPrice, setTotalPrice] = useState(Number(0).toFixed(2));

    const calcPrice = () => {
        setTotalPrice( () => {
            let prices = ctx.map( food => {
                return (food.price * food.amount);
            });
            let total;
            if(ctx.length > 0){
                total = prices.reduce( (p1, p2) => {
                    return p1 + p2;
                });
            } else {
                total = 0;
            }
            
            return total.toFixed(2);
        });
    };

    const cartVisibleHandler = () => {
        if(!cartAvailable){
            calcPrice();
            setCartAvailable(true);
        } else{
            setCartAvailable(false);
        }
    }

    return(
        <Fragment>
            {cartAvailable && 
                <Cart 
                    onClick={cartVisibleHandler} 
                    onCalc={calcPrice}
                    totalPrice={totalPrice}
                    changeCtxValue={props.changeCtxValue}
                />
            }
            {cartAvailable && <Backdrop/>}
            <button type="button" className={styles.cartButton} onClick={cartVisibleHandler}>
                <i className={`fas fa-shopping-cart ${styles['cart-icon']}`}></i>
                <span className={styles.span}>{ctx.length}</span>
            </button>
        </Fragment>
    );
}

export default CartButton;