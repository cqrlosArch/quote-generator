import React from 'react';
import styled from 'styled-components';

const CiteAuthorStyled = styled.footer`
  color: #4f4f4f;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 850px) {
    font-size: 20px;
  }

  &:hover {
    background-color: #333333;
    color: #fff;
  }
  .author {
    font-size: 24px;
    line-height: 28px;
  }
  .genre {
    font-size: 14px;
    line-height: 16px;
    color: #828282;
  }
  .icon {
    color: #fff;
    font-size: 40px;
  }
`;
const CiteAuthor = ({ quote, getRandomQuotesAuthor }) => {
  const { quoteAuthor, quoteGenre } = quote;
  return (
    <CiteAuthorStyled onClick={() => getRandomQuotesAuthor(quoteAuthor)}>
      <div className="container">
        <h2 className="author">{quoteAuthor}</h2>
        <p className="genre">{quoteGenre}</p>
      </div>
      <span className="material-icons icon md-48">arrow_right_alt</span>
    </CiteAuthorStyled>
  );
};

export default CiteAuthor;
