import React,{useState } from 'react';
import Header from './components/Layout/Header.js';
import Meals from './components/Meals/Meals.js';
import Cart from './components/Cart/Cart.js';
import CartProvider from './store/CartProvider.js';

function App() {
  const [cartIsShown, setCartIsShown]=useState(false);
  const onShowCartHandler=()=>{
    setCartIsShown(true);
  }
  const onHideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={onHideCartHandler}/>}
      <Header onShowCart={onShowCartHandler}/>
      <main>
      <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
