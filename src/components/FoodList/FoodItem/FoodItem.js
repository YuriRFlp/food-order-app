import styles from './FoodItem.module.css';
import ButtonRed from '../../UI/Button/ButtonRed';
import { useState } from 'react';

const FoodItem = (props) => {
    const [amount, setAmount] = useState(0);

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const foodData = {
            title: props.product,
            price: props.price,
            amount: amount
        };

        props.onLift(foodData);

        setAmount(0);
    }

    return(
        <div className={styles.flexRowContainer}>
            <div className={styles.flexColumnContainer}>
                <h3 className={styles.title}>{props.product}</h3>
                <p className={styles.text}><em>{props.detail}</em></p>
                <span className={styles.price}>${props.price}</span>
            </div>

            <form className={styles.flexColumnContainer} onSubmit={submitHandler}>
                <div className={styles.form}>
                    <label className={styles.label} htmlFor="amount">Amount</label>
                    <input 
                        className={styles.input} 
                        id="amount" 
                        type="number" 
                        min="0" max="100" 
                        value={amount} 
                        onChange={amountChangeHandler}
                    />
                </div>
                <ButtonRed>+ Add</ButtonRed>
            </form>
        </div>
    );
}

export default FoodItem;