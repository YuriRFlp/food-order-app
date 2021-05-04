import ReactDOM from 'react-dom';
import { useContext } from 'react';
import FoodListContext from '../../../../store/foodList-context';
import CartItems from './CartItems/CartItems';
import Container from '../../../UI/Container/Container';
import ButtonWhite from '../../../UI/Button/ButtonWhite';
import ButtonRed from '../../../UI/Button/ButtonRed';
import styles from './Cart.module.css';
import Backdrop from '../../../UI/Backdrop/Backdrop';

const Cart = (props) => {
    const ctx = useContext(FoodListContext);

    return ReactDOM.createPortal(
        <Backdrop>
            <Container>
                {ctx.map( food => {
                    return(    
                        <CartItems
                            key={food.title}
                            title={food.title}
                            price={food.price}
                            amount={food.amount}
                        />
                    );
                })};
                <div className={styles['amount-container']}>
                    <h3>Total Amount</h3>
                    <p className={styles['total-amount']}>$00,00</p>
                </div>
                <div className={styles['button-container']}>
                    <ButtonWhite onClick={props.onClick}>Close</ButtonWhite>
                    <ButtonRed>Order</ButtonRed>
                </div>
            </Container>
        </Backdrop>,
        document.getElementById('cart-root')
    )
}

export default Cart;