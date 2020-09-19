import axios from "axios";

import isSearchFav from "../../components/functions/isSearchFav";
import isAddedToFav from "../../components/functions/isAddedToFav";
import structureCurrentMovie from "../../components/functions/structureCurrentMovie";
import structureList from "../../components/functions/structureList";
import {
  SEARCH_MOVIE,
  ADD_TO_FAVOURITE,
  GET_CURRENT_MOVIE,
  REMOVE_FROM_FAVOURITE,
  SET_GLOBAL_SEARCH_TERM,
  CLEAR_SEARCH_MOVIE,
  SET_LOADING,
} from "../types";
import { saveToLocalStorage } from "../../components/functions/localStorage";

export const searchMovie = (searchTerm, moviesArr, type) => {
  return (dispatch, getState) => {
    //Setloading
    dispatch({ type: SET_LOADING, payload: true });
    let oldState = getState().favourite;

    //This Will RUn If We Made A Search
    if (type !== "no-data") {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=a8e054f1b8707f684448a851439659e4&query=${searchTerm}`
        )

        .then((res) => {
          saveToLocalStorage(res.data.results, "searchMovies");

          structureList(res.data.results).then((result) => {
            let searchMovieReduce = isSearchFav(result, oldState);

            dispatch({
              type: SEARCH_MOVIE,
              payload: { datas: searchMovieReduce },
            });

            dispatch({ type: SET_LOADING, payload: false });
          });
        });
    }
    //This Will Run Anytime We go to the homepage
    //This Will Save User From Essense Request
    //This Action Is Called From "App.js"
    else {
      //SetLoading
      dispatch({ type: SET_LOADING, payload: true });
      structureList(moviesArr).then((result) => {
        let searchMovieReduce = isSearchFav(result, oldState);

        dispatch({
          type: SEARCH_MOVIE,
          payload: { datas: searchMovieReduce },
        });

        //Setloading
        dispatch({ type: SET_LOADING, payload: false });
      });
    }
    //End
  };
};

//Favourite
export const addToFavouriteBtn = (movie) => {
  return (dispatch, getState) => {
    let oldState = getState().favourite;
    let check = oldState.findIndex((f) => f.id === movie.id);
    //Getting New Object Of Array Excluding The Current Obj;
    let newState = oldState.filter((n) => n.id !== movie.id);

    if (oldState.length < 1) {
      dispatch({
        type: ADD_TO_FAVOURITE,
        payload: { movie: { ...movie, isFavourite: true } },
      });
    } else {
      if (check === -1) {
        dispatch({
          type: ADD_TO_FAVOURITE,
          payload: { movie: { ...movie, isFavourite: true } },
        });
      } else {
        //Remove From Favourite
        dispatch({
          type: REMOVE_FROM_FAVOURITE,
          payload: { favourite: newState },
        });
      }
    }
  };
};

//Get Current Movie
export const getCurrentMovie = (id) => {
  return (dispatch, getState) => {
    //Setloading
    dispatch({ type: SET_LOADING, payload: true });
    let oldState = getState().favourite;

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=a8e054f1b8707f684448a851439659e4`
      )
      .then((res) => {
        let isFavourite = isAddedToFav(res.data.id, oldState);
        structureCurrentMovie(res.data).then((data) => {
          let freshData = { ...data, isFavourite };

          dispatch({ type: GET_CURRENT_MOVIE, payload: { data: freshData } });

          //Setloading
          dispatch({ type: SET_LOADING, payload: false });
        });
      });
  };
};

//SEARCH TERM
export const setSearchTermAction = (str) => {
  return {
    type: SET_GLOBAL_SEARCH_TERM,
    payload: str,
  };
};

export const clearPrevSearches = () => {
  return {
    type: CLEAR_SEARCH_MOVIE,
  };
};

//Loading
export const setLoading = (option) => {
  return {
    type: SET_LOADING,
    payload: option,
  };
};
