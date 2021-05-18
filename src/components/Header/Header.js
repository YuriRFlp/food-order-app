import styles from './Header.module.css';
import CartButton from './CartButton/CartButton';

const Header = (props) => {
    return(
        <header className={styles.header}>
            <h1 className={styles.title}>ReactMeals</h1>
            <CartButton changeCtxValue={props.changeCtxValue}/>
        </header>
    );
};

export default Header;