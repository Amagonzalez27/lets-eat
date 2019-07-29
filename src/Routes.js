import React from 'react';
import Home from './Components/Home';
import Favorites from './Components/Favorites';
import Choices from './Components/Choices'

const Routes = {
  '/': () => <Home />,
  '/favorites': () => favorites => <Favorites favorites={favorites} />,
  '/choices': () => choices => <Choices choices={choices} />
};

export default Routes;
