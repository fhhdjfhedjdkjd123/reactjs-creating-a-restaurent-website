import React,{ Fragment, useState } from 'react';
import Header from './components/Layout/Header.js';
import Meals from './components/Meals/Meals.js';
import Cart from './components/Cart/Cart.js';

function App() {
  const [cartIsShown, setCartIsShown]=useState(false);
  const onShowCartHandler=()=>{
    setCartIsShown(true);
  }
  const onHideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={onHideCartHandler}/>}
      <Header onShowCart={onShowCartHandler}/>
      <main>
      <Meals />
      </main>
    </Fragment>
  );
}

export default App;
