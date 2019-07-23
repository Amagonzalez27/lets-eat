import React from 'react';
import Home from './Components/Home';
import Favorites from './Components/Favorites';

const Routes = {
  '/': () => <Home />,
  '/favorites': () => favorites => <Favorites favorites={favorites} />,
};

export default Routes;
