import React, { useState, useContext } from 'react';
/* Components */
import DropDown from './DropDown';
import Choices from './Choices';
/* Styling */
import styled from 'styled-components';
/* Context Providers */
import { DispatchContext } from '../App';

function Home() {
  const dispatch = useContext(DispatchContext);
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`/api/yelp/${value}`)
      .then(res => res.json())
      .then(yelp => {
        dispatch({ type: 'GET_CHOICES', payload: yelp });
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
      <Choices />
    </StyledHome>
  );
}

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
export default Home;
