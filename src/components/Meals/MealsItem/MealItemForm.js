import classes from './MealItemForm.module.css';
import Input from '../../UI/Input.js';
// import CartCntx from '../../../store/cart-context';
import { useState,useRef } from 'react';

const MealItemForm=(props)=>{
    // const ids=`amount + {props.id}'`
    // const cartcntx = useContext(CartCntx);
    // const addItemToCart=(event)=>{
    //     event.preventDefault();
    //     // cartcntx.items.push(props.item);
    //     const quantity = document.getElementById('amount').value;
    //     cartcntx.addItem({...props.item,quantity:quantity});
    //     //console.log(cartcntx);

    // }
    const [amountIsvalid,setAmountIsValid] = useState(true);
    const amountInputRef=useRef();

    const submitHandler=(event)=>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber=+enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredAmountNumber<1 || enteredAmountNumber > 5){
            setAmountIsValid(false);
            return
        }
        props.onAddToCart(enteredAmountNumber);
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
        {/* {console.log(cartcntx.items)} */}
            <Input
            ref={amountInputRef} 
            label="Amount"
            // id="amount_" +props.id,
            id='amount'
              type="number"
              min="1"
              max="5"
              defaultValue="1"
              />
            <button>+Add</button>
            {!amountIsvalid && <p>Please enter a valid amount(0-5)</p>}

        </form>
    )
}
export default MealItemForm;