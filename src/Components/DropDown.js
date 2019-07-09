import React from 'react';
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
  return (
    <form onSubmit={props.handleSubmit}>
      <h3>What are you craving?</h3>
      <Select value={props.value} onChange={props.handleChange}>
        <option value="" disabled>
          Select Preference
        </option>
        <option value="restaurant">Sit Down</option>
        <option value="delivery">Take Out</option>
        <option value="bar">Bar</option>
      </Select>
      <SubmitBtn type="submit" value="Submit" />
    </form>
  );
}

export default DropDown;
