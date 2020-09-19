import movieImg from "./movieImg";
import popularity from "./popularity";
import formatNumber from "./formatViews";
import splitDate from "./splitDate";
const structureList = (movies) => {
  const newMovies = movies.reduce((acc, cur) => {
    acc.push({
      id: cur.id,
      title: cur.title,
      img: movieImg(cur.backdrop_path, cur.poster_path),

      language: cur.original_language,
      overview: cur.overview,
      popularity: popularity(cur.popularity),
      release_date: splitDate(cur.release_date),
      total_views: formatNumber(cur.vote_count),
      isFavourite: false,
      genre: [...cur.genre_ids],
    });
    return acc;
  }, []);

  return new Promise((res, rej) => res(newMovies));
};

export default structureList;
