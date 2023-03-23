import {useContext,useEffect,useState} from 'react';
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton=(props)=>{
    const [btnisHighlighted,setBtnIsHighlighted]= useState(false);
    const cartCtx = useContext(CartContext);
    // let quantity=0;
    // cartCtx.items.forEach((item)=>{
    //     quantity=quantity+Number(item.quantity);
    // })
    const {items} =cartCtx;

    const numberOfCartItems = items.reduce((curNum,item)=>{
        return curNum+item.amount;
    },0);
    const btnClasses = `${classes.button} ${btnisHighlighted ? classes.bump:''}`;

    useEffect(()=>{
        if(items.length === 0){
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(()=>{
            setBtnIsHighlighted(false);
        },300);
        return ()=>{
            clearTimeout(timer);
        }
    },[items])
    return(
        <button className={btnClasses} onClick={props.onclick}>
            <span className={classes.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )

}

export default HeaderCartButton;