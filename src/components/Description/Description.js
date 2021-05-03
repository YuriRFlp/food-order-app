import styles from './Description.module.css';

const Description = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Delicious Food, Delivered To You</h1>
            <p className={styles.text}>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
            <p className={styles.text}>All our meals are cooked with hogh-quality ingredients, just-in-time and of course by experienced chefs!</p>
        </div>
    );
}

export default Description;