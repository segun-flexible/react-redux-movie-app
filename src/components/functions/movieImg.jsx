//Setting Thumbnail for search movie
const movieImg = (bp, pp) => {
  if (bp) {
    return `https://image.tmdb.org/t/p/original/${bp}`;
  } else if (pp) {
    return `https://image.tmdb.org/t/p/original/${pp}`;
  } else {
    return "/img/thumb.jpg";
  }
};

export default movieImg;
