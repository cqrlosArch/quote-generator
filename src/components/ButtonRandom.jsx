import React from 'react';
import styled from 'styled-components';

const RandomStyled = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  color: #4f4f4f;
  margin: 1rem 3rem;
  cursor: pointer;
  font-size: 18px;
  line-height: 120%;

  .button {
    border: none;
    outline: none;
    background-color: inherit;
  }
  .icon {
    transform: rotateY(180deg);
    color: #4f4f4f;
  }
`;

const ButtonRandom = ({getRandomQuote}) => {
  return (
    <RandomStyled onClick={getRandomQuote}>
      <p className="text">random</p>
      <button className="button" >
        <span className="material-icons icon">sync</span>
      </button>
    </RandomStyled>
  );
};

export default ButtonRandom;
