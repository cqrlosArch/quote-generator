/* eslint-disable no-throw-literal */
const getData = async () => {
  try {
    const res = await fetch(
      `https://quote-garden.herokuapp.com/api/v3/quotes/random`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
