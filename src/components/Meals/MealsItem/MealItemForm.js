import classes from './MealItemForm.module.css';
import Input from '../../UI/Input.js';
import CartCntx from '../../../store/cart-context';
import { useContext } from 'react';

const MealItemForm=(props)=>{
    // const ids=`amount + {props.id}'`
    const cartcntx = useContext(CartCntx);
    const addItemToCart=(event)=>{
        event.preventDefault();
        // cartcntx.items.push(props.item);
        const quantity = document.getElementById('amount').value;
        cartcntx.addItem({...props.item,quantity:quantity});
        //console.log(cartcntx);

    }
    return(
        <form className={classes.form}>
        {/* {console.log(cartcntx.items)} */}
            <Input 
            label="Amount"
            // id="amount_" +props.id,
            id='amount'
              type="number"
              min="1"
              max="5"
              defaultValue="1"
              />
            <button onClick={addItemToCart}>+Add</button>
        </form>
    )
}
export default MealItemForm;