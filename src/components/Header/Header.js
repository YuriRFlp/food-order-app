import styles from './Header.module.css';
import CartButton from './CartButton/CartButton';

const Header = (props) => {
    const liftingSubtractHandler = foodTitle => {
        props.onSubtract(foodTitle);
    };

    const liftingAddHandler = foodTitle => {
        props.onAdd(foodTitle);
    };

    return(
        <header className={styles.header}>
            <h1 className={styles.title}>ReactMeals</h1>
            <CartButton
                onSubtract={liftingSubtractHandler}
                onAdd={liftingAddHandler}>
            </CartButton>
        </header>
    );
};

export default Header;