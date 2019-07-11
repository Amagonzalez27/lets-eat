import React, { useState, useEffect } from 'react';
// import './App.css';
import styled from 'styled-components';

import DropDown from './Components/DropDown';
import InfoCard from './Components/InfoCard';

const Main = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  const [value, setValue] = useState('');
  const [choices, setChoices] = useState([]);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Now send value to API
    console.log(value);
    fetch(`/api/yelp/${value}`)
      .then(res => res.json())
      .then(choices => {
        setChoices([...choices]);
      });
  };

  // useEffect(() => {
  //   fetch(`/api/yelp/bar`)
  //     .then(res => res.json())
  //     .then(choices => {
  //       setChoices([...choices]);
  //     });
  // }, []);

  return (
    <Main className="App">
      {choices.length === 0 ? (
        <DropDown
          value={value}
          setValue={setValue}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      ) : (
        <div>
          <InfoCard yelp={choices} />
        </div>
      )}
    </Main>
  );
}

export default App;
