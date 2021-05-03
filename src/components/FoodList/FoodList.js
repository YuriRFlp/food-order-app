import Container from '../UI/Container/Container';
import FoodItem from './FoodItem/FoodItem';

const FoodList = (props) => {
    return(
        <Container>
            {props.items.map( food => {
                return(
                    <FoodItem
                        key={food.title}
                        product={food.title}
                        detail={food.description}
                        price={food.price.toFixed(2)}
                    />
                )
            })}
        </Container>
    );
}

export default FoodList;