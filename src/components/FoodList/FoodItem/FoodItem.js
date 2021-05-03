import styles from './FoodItem.module.css';
import Button from '../../UI/Button/Button';
import { useState } from 'react';

const FoodItem = (props) => {
    const [amount, setAmount] = useState(0);

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    return(
        <div className={styles.flexRowContainer}>
            <div className={styles.flexColumnContainer}>
                <h3 className={styles.title}>{props.product}</h3>
                <p className={styles.text}><em>{props.detail}</em></p>
                <span className={styles.price}>${props.price}</span>
            </div>

            <form className={styles.flexColumnContainer}>
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
                <Button>+ Add</Button>
            </form>
        </div>
    );
}

export default FoodItem;