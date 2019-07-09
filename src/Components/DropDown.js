import React, { useState } from 'react';
import styled from 'styled-components';

const Select = styled.select`
  border: 0;
  background-color: #00cc96;
  color: #fff;
  font-size: 1.5rem;
  height: 3rem;
`;

const SubmitBtn = styled.input`
  border: 1px solid #00cc96;
  border-radius: 5px;
  backgroun-color: #fff;
  color: #00cc96;
  height: 50px;
  font-size: 1.5rem;
  margin-left: 10px;
`;

function DropDown(props) {
  const [value, setValue] = useState('');

  const handleChange = e => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Now send value to API

  };
  return (
    <form onSubmit={handleSubmit}>
      <label>What are you craving?</label>
      <Select value={value} onChange={handleChange}>
        <option defaultValue="">Select Preference</option>
        <option value="sit-down">Sit Down</option>
        <option value="take-out">Take Out</option>
        <option value="Bar">Bar</option>
      </Select>
      <SubmitBtn type="submit" value="Submit" />
    </form>
  );
}

export default DropDown;
