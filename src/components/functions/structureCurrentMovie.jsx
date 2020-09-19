import movieImg from "./movieImg";
import popularity from "./popularity";
import formatNumber from "./formatViews";

import displayGenres from "./displayGenres";
const structureCurrentMovie = (movie) => {
  let newMovies = {
    ...movie,
    vote_count: formatNumber(movie.vote_count),
    popularity: popularity(movie.popularity),
    img: movieImg(movie.backdrop_path, movie.poster_path),
    genres: displayGenres(movie.genres),
  };

  return new Promise((res, rej) => res(newMovies));
};

export default structureCurrentMovie;
