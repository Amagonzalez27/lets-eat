import React, { useState } from 'react';
import DropDown from './DropDown';
import Choices from './Choices';
import styled from 'styled-components';

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

function Home() {
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

  return (
    <StyledHome>
      <DropDown
        value={value}
        setValue={setValue}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Choices choices={choices} />
    </StyledHome>
  );
}

export default Home;
