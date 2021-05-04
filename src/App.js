import { useState } from 'react';
import Description from './components/Description/Description';
import FoodList from './components/FoodList/FoodList';
import Header from './components/Header/Header';
import FoodListContext from './store/foodList-context';

const App = () => {
  const foodList = [
    {
      title: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99
    },
    {
      title: "Schnitzel",
      description: "A german, specialty",
      price: 16.50
    },
    {
      title: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99
    },
    {
      title: "Green Bowl",
      description: "Healthy and green",
      price: 18.99
    }
  ];

  const [selectedFood, setSelectedFood] = useState([]);

  const setFoodListContext = foodData => {
    setSelectedFood( prevSelectedFood => {
      return [foodData, ...prevSelectedFood];
    });
  };

  return (
    <FoodListContext.Provider value={selectedFood}>
      <Header/>
      <Description/>
      <FoodList items={foodList} onLift={setFoodListContext}></FoodList>
    </FoodListContext.Provider>
  );
}

export default App;
