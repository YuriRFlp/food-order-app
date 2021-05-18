import { useState, useEffect } from 'react';
import Container from '../UI/Container/Container';
import FoodItem from './FoodItem/FoodItem';
import styles from './FoodList.module.css';

const FoodList = (props) => {
    const [foodList, setFoodList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect( () => {
        const fetchFoodListHandler = async () => {
            setIsLoading(true);

            try{
                const response = await fetch('https://food-order-655b4-default-rtdb.firebaseio.com/meals.json');
                const data = await response.json();

                for( let meal in data) {
                    setFoodList( prevFoodList => {
                        return [data[meal], ...prevFoodList];
                    });
                };        
    
                setIsLoading(false);
            }catch(e){
                setError(true);
            }
        };

        fetchFoodListHandler();
    }, []);

    let content;
    if(isLoading){
        content = <p className={styles.scale}>...</p>;
    }
    if(error){
        content = <p className={styles.text}>Something with your connection went wrong</p>;
    }
    if(!isLoading && foodList.length === 0){
        content = <p className={styles.text}>Found no meals</p>;
    }

    const liftingDataFromFoodListHandler = foodData => {
        props.onLift(foodData);
    };

    return(
        <Container>
            {content}
            {foodList.map( food => {
                return(
                    <FoodItem
                        key={food.title}
                        product={food.title}
                        detail={food.description}
                        price={food.price.toFixed(2)}
                        onLift={liftingDataFromFoodListHandler}
                    />
                )
            })}
        </Container>
    );
}

export default FoodList;