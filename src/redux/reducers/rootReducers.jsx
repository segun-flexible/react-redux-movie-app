import { combineReducers } from "redux";
import addToFavouriteReducer from "./addToFavourite";
import getCurrentMovieReducer from "./getCurrentMovieReducer";
import gloBalSearchTerm from "./globalSearchTerm";
import loadingReducer from "./loadingReducer";
import searchMovies from "./searchMovies";

export const rootReducers = combineReducers({
  searchMovies,
  favourite: addToFavouriteReducer,
  currentMovie: getCurrentMovieReducer,
  searchTerm: gloBalSearchTerm,
  loading: loadingReducer,
});
