import ReactDOM from 'react-dom';
import { useContext, useState } from 'react';
import FoodListContext from '../../../../store/foodList-context';
import CartItems from './CartItems/CartItems';
import Container from '../../../UI/Container/Container';
import ButtonWhite from '../../../UI/Button/ButtonWhite';
import ButtonRed from '../../../UI/Button/ButtonRed';
import styles from './Cart.module.css';
import Backdrop from '../../../UI/Backdrop/Backdrop';

const Cart = (props) => {
    const ctx = useContext(FoodListContext);

    const [totalPrice, setTotalPrice] = useState(Number(0).toFixed(2));

    const calcPrice = () => {
        setTotalPrice( prevTotalPrice => {
            let prices = ctx.map( food => {
                return (food.price * food.amount);
            });

            let total = prices.reduce( (p1, p2) => {
                return p1 + p2;
            });
            
            return total.toFixed(2);
        });
    }

    const liftingSubtractHandler = foodTitle => {
        props.onSubtract(foodTitle);
    };

    const liftingAddHandler = foodTitle => {
        props.onAdd(foodTitle);
    };

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
                            onSubtract={liftingSubtractHandler}
                            onAdd={liftingAddHandler}
                            onCalc={calcPrice}
                        />
                    );
                })};
                <div className={styles['amount-container']}>
                    <h3>Total Price</h3>
                    <p className={styles['total-amount']}>${totalPrice}</p>
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