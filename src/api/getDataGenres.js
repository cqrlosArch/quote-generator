const getDataGenres = async (author) => {
  try {
    const res = await fetch(
      `https://quote-garden.herokuapp.com/api/v2/authors/${author}
        `
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getDataGenres;
