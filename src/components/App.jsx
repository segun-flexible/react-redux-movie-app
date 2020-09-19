import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchMovie, setLoading } from "../redux/actions";
import { SET_LOADING } from "../redux/types";
import EmptyList from "./EmptyList";
import { getFromLocalStorage } from "./functions/localStorage";

import useTitle from "./Hooks/useTitle";
import LoadingUI from "./Loading";

import MovieList from "./MovieList";

const App = (props) => {
  useTitle("Welcome");
  useEffect(() => {
    getFromLocalStorage("searchMovies").then((res) => {
      if (res) {
        props.searchMovie(null, res, "no-data");
      }
    });

    props.setLoading(false);
  }, []);

  return (
    <div className="container-fluid">
      {props.loading ? (
        <LoadingUI />
      ) : props.searchReduxArr.length < 1 ? (
        <EmptyList name="Movie List" />
      ) : (
        <MovieList />
      )}
    </div>
  );
};
function mapStateToProps(state) {
  return {
    searchReduxArr: state.searchMovies,
    searchText: state.searchTerm,
    loading: state.loading,
  };
}
export default connect(mapStateToProps, { searchMovie, setLoading })(App);
