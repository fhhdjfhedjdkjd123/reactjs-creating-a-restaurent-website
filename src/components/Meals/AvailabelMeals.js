import classes from './AvailableMeals.module.css';
import React from 'react';
import Card from '../UI/Card';
import MealsItems from './MealsItem/MealsItems';
const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];      

const AvailableMeals=()=>{
    // const mealsList = DUMMY_MEALS.map(meal => 
    // <li>
    //   {meal.name} 
    //   {meal.description}
    //   {meal.price}
    //   </li>);
    return(
        <section className={classes.meals}>
        <Card>
          <ul>
          {DUMMY_MEALS.map(meal =>(
            <MealsItems
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            key={meal.id}
          />
          ))
          }
          </ul>
        </Card>
        </section> 
    )
}
export default AvailableMeals;