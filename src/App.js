import { Fragment } from 'react';
import Header from './components/Layout/Header.js';
import MealsSummary from './components/Meals/MealsSummary.js';

function App() {
  return (
    <Fragment>
      <Header/>
      <MealsSummary />
    </Fragment>
  );
}

export default App;
