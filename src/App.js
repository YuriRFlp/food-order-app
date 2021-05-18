import { useState } from 'react';
import Description from './components/Description/Description';
import FoodList from './components/FoodList/FoodList';
import Header from './components/Header/Header';
import FoodListContext from './store/cart-context';

const App = () => {
  const [selectedFood, setSelectedFood] = useState([]);

  const setCartContext = foodData => {
    setSelectedFood( prevSelectedFood => {
      let isARepeatItem = false;
      
      prevSelectedFood.forEach( food => {
        if(food.title === foodData.title){
          isARepeatItem = true;
          food.amount += foodData.amount;
        };
      });
      
      return (isARepeatItem) ? prevSelectedFood : [foodData, ...prevSelectedFood];
    });
  };


  return (
    <FoodListContext.Provider value={selectedFood}>
      <Header changeCtxValue={setSelectedFood}/>
      <Description/>
      <FoodList onLift={setCartContext}/>
    </FoodListContext.Provider>
  );
}

export default App;
