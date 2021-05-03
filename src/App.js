// import styles from './App.module.css';
import { Fragment } from 'react';
import Description from './components/Description/Description';
import FoodList from './components/FoodList/FoodList';
import Header from './components/Header/Header';

const App = () => {
  let foodList = [
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

  return (
    <Fragment>
      <Header/>
      <Description/>
      <FoodList items={foodList}></FoodList>
    </Fragment>
  );
}

export default App;
