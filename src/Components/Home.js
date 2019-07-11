import React, { useState } from 'react';
import { Main } from '../styles';
import DropDown from './DropDown';
import InfoCard from './InfoCard';

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
    <Main className="App">
      <div>
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
      </div>
    </Main>
  );
}

export default Home;
