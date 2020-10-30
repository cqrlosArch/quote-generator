import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import getData from './api/getData';
import getDataGenres from './api/getDataGenres';
import ButtonRandom from './components/ButtonRandom';
import CiteAuthor from './components/CiteAuthor';
import ListQuotesAuthor from './components/ListQuotesAuthor';
import Quote from './components/Quote';

const GlobalStyled = createGlobalStyle`
  body{
    width:100vw;
   height:100vh;
    font-family: 'Raleway', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x:hidden;
    position:relative;
    margin:0;

   
}
`;

function App() {
  const [quote, setQuote] = useState(null);
  const [listQuotes, setListQuotes] = useState([]);
  const [author, setAuthor] = useState('');

  const getRandomQuote = () => {
    getData().then((data) => {
      setListQuotes(null);
      setQuote(data.quote);
    });
  };

  const getRandomQuotesAuthor = (author) => {
    getDataGenres(author).then((data) => {
      setQuote(null);
      setAuthor(author);
      setListQuotes(data.quotes);
    });
  };

  useEffect(() => {
    getRandomQuote();
  }, []);
  return (
    <>
      <ButtonRandom getRandomQuote={getRandomQuote} />
      <GlobalStyled />
      {quote && (
        <>
          <Quote quote={quote} />
          <CiteAuthor
            quote={quote}
            getRandomQuotesAuthor={getRandomQuotesAuthor}
          />
        </>
      )}
      {listQuotes && (
        <ListQuotesAuthor listQuotes={listQuotes} author={author} />
      )}
    </>
  );
}

export default App;
