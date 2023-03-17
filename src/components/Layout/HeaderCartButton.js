import {useContext} from 'react';
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton=(props)=>{
    const cartCtx = useContext(CartContext);
    let quantity=0;
    cartCtx.items.forEach((item)=>{
        quantity=quantity+Number(item.quantity);
    })
    // const numberOfCartItems = cartCtx.items.reduce((curNum,item)=>{
    //     return curNum+item.amount;
    // },0);
    return(
        <button className={classes.button} onClick={props.onclick}>
            <span className={classes.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>{quantity}</span>
        </button>
    )

}

export default HeaderCartButton;