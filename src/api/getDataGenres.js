const getDataGenres = async (author) => {
  try {
    const res = await fetch(
      `https://quote-garden.herokuapp.com/api/v3/quotes?author=${author.toString()}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getDataGenres;
