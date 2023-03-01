import React,{Fragment} from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailabelMeals';
const Meals=()=>{
    return(
        <Fragment>
            <MealsSummary></MealsSummary>
            <AvailableMeals></AvailableMeals>
        </Fragment>
    )
}
export default Meals;