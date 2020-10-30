import React from 'react';
import styled from 'styled-components';

const QuoteStyled = styled.blockquote`
  width: auto;
  height: auto;
  position: relative;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  &::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 100%;
    background-color: red;
    transform: translateX(-100px);
    background: #f7df94;

    @media screen and (max-width: 850px) {
      transform: translateX(-60px);
    }
  }
  .text {
    width: 614px;
    height: auto;
    font-size: 25px;
    line-height: 120%;
    margin: 0;
    padding: 0.5rem;

    @media screen and (max-width: 850px) {
      width: 314px;
      font-size: 20px;
    }

    &::before {
      content: open-quote;
    }
    &::after {
      content: close-quote;
    }
  }
`;

const Quote = ({ quote }) => {
  const { quoteText } = quote;
  return (
    <QuoteStyled>
      <p className="text">{quoteText}</p>
    </QuoteStyled>
  );
};

export default Quote;
