import React from 'react';
import logo from './logo.svg';
import './App.css';
// import styled from 'styled-components';

import Customers from './Components/Customers/Customers';
import DropDown from './Components/DropDown';

function App() {
  // const Button = styled.button`
  //   background: black;
  //   color: #fff;
  //   border: 0;
  //   padding: 7px 10px;
  // `;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Customers />
        {/* <Button>Click Me!</Button> */}
        <DropDown />
      </header>
    </div>
  );
}

export default App;
