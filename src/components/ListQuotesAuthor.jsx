import React from 'react';
import Quote from './Quote';
import styled from 'styled-components';

const ListQuotesStyled = styled.div`
  position: relative;
  width: inherit;
  height: 100vh;
  padding-top: 3rem;
  @media screen and (max-width: 850px){
    padding-top: 1rem;
    }
  .author {
    margin-top: 5rem;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    color: #333333;
    @media screen and (max-width: 850px){
      font-size: 28px;
      margin-top: 3rem;
    }
  }

  .list-quotes {
    margin: 5rem 0;
  }
`;

const ListQuotesAuthor = ({ listQuotes, author }) => {
  return (
    <ListQuotesStyled>
      <h1 className="author">{author}</h1>
      <section className="list-quotes">
        {listQuotes.map((quote) => {
          return <Quote quote={quote} />;
        })}
      </section>
    </ListQuotesStyled>
  );
};

export default ListQuotesAuthor;
