import React, { useState, useContext } from 'react';
/* Route */
import { navigate } from 'hookrouter';
/* Component */
import InfoCard from './InfoCard';
/* Styling */
import styled from 'styled-components';
/* Context Providers */
import { DispatchContext, StateContext } from '../App';

function Choices() {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const [choiceIdx, setChoiceIdx] = useState(0);

  const displayNextChoice = function() {
    setChoiceIdx(choiceIdx + 1);
  };

  const yelpPick = function(e, choice) {
    if (choice) {
      dispatch({ type: 'ADD_FAVORITES', payload: choice });
      displayNextChoice();
    } else {
      displayNextChoice();
    }
  };

  const choices = state.choices;
  const displayedChoice = choices[choiceIdx];

  return (
    <div>
      {choices.length && choiceIdx <= choices.length - 1 ? (
        <InfoCard choice={displayedChoice} yelpPick={yelpPick} />
      ) : (
        <div>
          {state.favorites.length ? (
            <Button onClick={() => navigate('/favorites')}>My Favorites</Button>
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  );
}

const Button = styled.button`
  border: 1px solid #00cc96;
  border-radius: 5px;
  backgroun-color: #fff;
  color: #00cc96;
  height: 50px;
  font-size: 1.5rem;
  margin-top: 25px;
  margin-left: 10px;
`;

export default Choices;
