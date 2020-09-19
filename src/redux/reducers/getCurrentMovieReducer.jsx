import {
  ADD_TO_FAVOURITE,
  GET_CURRENT_MOVIE,
  REMOVE_FROM_FAVOURITE,
} from "../types";

const getCurrentMovieReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CURRENT_MOVIE:
      return action.payload.data;

    case ADD_TO_FAVOURITE:
      return { ...state, isFavourite: !state.isFavourite };
    case REMOVE_FROM_FAVOURITE:
      return { ...state, isFavourite: !state.isFavourite };
    default:
      return state;
  }
};

export default getCurrentMovieReducer;
