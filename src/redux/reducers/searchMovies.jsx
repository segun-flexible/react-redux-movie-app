import { SEARCH_MOVIE, ADD_TO_FAVOURITE, CLEAR_SEARCH_MOVIE } from "../types";

const searchMovies = (state = [], action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return [...action.payload.datas];

    case CLEAR_SEARCH_MOVIE:
      return [];

    case ADD_TO_FAVOURITE:
      return state;
    default:
      return state;
  }
};

export default searchMovies;
