import React, { useState } from 'react';
import InfoCard from './InfoCard';

function Choices(props) {
  const [choiceIdx, setChoiceIdx] = useState(0);

  const displayNextChoice = function() {
    setChoiceIdx(choiceIdx + 1);
  };

  const choices = props.choices;
  const displayedChoice = choices[choiceIdx];

  return (
    <div>
      {choices.length && choiceIdx <= choices.length - 1 ? (
        <InfoCard
          choice={displayedChoice}
          displayNextChoice={displayNextChoice}
        />
      ) : (
        <div />
      )}
    </div>
  );
}

export default Choices;
