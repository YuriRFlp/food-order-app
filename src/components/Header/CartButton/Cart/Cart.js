import ReactDOM from 'react-dom';
import { useContext, useState } from 'react';
import CartContext from '../../../../store/cart-context';
import CartItems from './CartItems/CartItems';
import Container from '../../../UI/Container/Container';
import ButtonWhite from '../../../UI/Button/ButtonWhite';
import ButtonRed from '../../../UI/Button/ButtonRed';
import styles from './Cart.module.css';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import AlertOrder from './AlertOrder/AlertOrder';

const Cart = (props) => {
    const ctx = useContext(CartContext);
    const [wasSent, setWasSent] = useState(false);
    const [error, setError] = useState(null);

    const subAmountHandler = foodTitle => {
        props.changeCtxValue( prevSelectedFood => {
            prevSelectedFood.forEach( (food) => {
                if(food.title === foodTitle && food.amount > 0){
                    food.amount--;
                }
            });
            
            return prevSelectedFood;
        });
    };
    
    const addAmountHandler = foodTitle => {
        props.changeCtxValue( prevSelectedFood => {
            prevSelectedFood.forEach( food => {
                if(food.title === foodTitle){
                    food.amount++;
                };
            });
          
            return prevSelectedFood;
        });
    };
    
    const deleteCartItemHandler = foodTitle => {
        props.changeCtxValue( prevSelectedFood => {
            prevSelectedFood.forEach( (food, i) => {
                if(food.title === foodTitle){
                    prevSelectedFood.splice(i, 1);
                };
            });
    
            return [...prevSelectedFood];
        });
    };

    const fetchCartDataHandler = async () => {
        const order = {
            items: [...ctx],
            total: props.totalPrice
        }

        try{
            await fetch('https://food-order-655b4-default-rtdb.firebaseio.com/orders.json', {
                method: 'POST',
                body: JSON.stringify(order),
            });

        }catch(e) {
            setError(true);
        }

        props.changeCtxValue([]);
        
        setWasSent(true);
    };

    return ReactDOM.createPortal(
        <Backdrop>
            {wasSent && !error && <AlertOrder onClick={props.onClick} message='Your order was sent'/>}
            {error && <AlertOrder onClick={props.onClick} message='Your order cannot be sent'/>}
            {!wasSent && 
                <Container>
                    {ctx.map( food => { 
                        return(    
                            <CartItems
                                key={food.title}
                                title={food.title}
                                price={food.price}
                                amount={food.amount}
                                onSubtract={subAmountHandler}
                                onAdd={addAmountHandler}
                                onDelete={deleteCartItemHandler}
                                onCalc={props.onCalc}
                            />
                        )
                    })}

                    <div className={styles['amount-container']}>
                        <h3>Total Price</h3>
                        <p className={styles['total-amount']}>${props.totalPrice}</p>
                    </div>
                    <div className={styles['button-container']}>
                        <ButtonWhite onClick={props.onClick}>Close</ButtonWhite>
                        <ButtonRed onClick={fetchCartDataHandler}>Order</ButtonRed>
                    </div>
                </Container>
            }
        </Backdrop>,
        document.getElementById('cart-root')
    )
}

export default Cart;