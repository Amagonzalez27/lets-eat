import React, { useState } from 'react';
import './App.css';

import DropDown from './Components/DropDown';

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
      .then(choices => setChoices([...choices]));
  };

  return (
    <div className="App">
      <header className="App-header">
        <DropDown
          value={value}
          setValue={setValue}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />

        <ul>
          {choices.map(c => (
            <div key={c.id}>
              <div>
                <img src={c.image_url} alt={c.name} width={600} height={400} />
              </div>
              <h3>{c.name}</h3>
              <p>Rating: {c.rating}</p>
            </div>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
