import React, { useState } from 'react';
import InfoCard from './InfoCard';
import styled from 'styled-components';

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

function Choices(props) {
  const [choiceIdx, setChoiceIdx] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const displayNextChoice = function() {
    setChoiceIdx(choiceIdx + 1);
  };

  const yelpPick = function(e, choice) {
    console.log(choice);
    if (choice) {
      setFavorites([...favorites, choice]);
      displayNextChoice();
    } else {
      displayNextChoice();
    }
  };

  const choices = props.choices;
  const displayedChoice = choices[choiceIdx];

  return (
    <div>
      {choices.length && choiceIdx <= choices.length - 1 ? (
        <InfoCard choice={displayedChoice} yelpPick={yelpPick} />
      ) : (
        <div>
          {favorites.length ? (
           <Button>My Favorites</Button>
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  );
}

export default Choices;
