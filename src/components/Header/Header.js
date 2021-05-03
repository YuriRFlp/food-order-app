import styles from './Header.module.css';
import CartButton from './CartButton/CartButton';

const Header = () => {
    return(
        <header className={styles.header}>
            <h1 className={styles.title}>ReactMeals</h1>
            <CartButton>0</CartButton>
        </header>
    )
}

export default Header;