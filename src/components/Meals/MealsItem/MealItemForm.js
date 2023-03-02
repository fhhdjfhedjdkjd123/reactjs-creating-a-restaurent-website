import classes from './MealItemForm.module.css';
import Input from '../../UI/Input.js';
const MealItemForm=(props)=>{
    // const ids=`amount + {props.id}'`
    return(
        <form className={classes.form}>
            <Input 
            label="Amount"
              id='amount'
              type="number"
              min="1"
              max="5"
              defaultValue="1"
              />
            <button>+Add</button>
        </form>
    )
}
export default MealItemForm;