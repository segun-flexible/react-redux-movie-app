const displayGenres = (genresArr) => {
  let arr = [];
  genresArr.map((g) => arr.push(g.name));

  return arr.join(" / ");
};

export default displayGenres;
