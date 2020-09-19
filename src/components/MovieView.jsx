import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import {
  addToFavouriteBtn,
  clearPrevSearches,
  getCurrentMovie,
} from "../redux/actions";
import LoadingUI from "./Loading";

import MovieAddToFavourite from "./MovieView/MovieAddToFavourite";
import MovieBreadCrumb from "./MovieView/MovieBreadCrumb";
import MovieBudget from "./MovieView/MovieBudget";
import MovieFooter from "./MovieView/MovieFooter/MovieFooter";
import MovieInfoDescription from "./MovieView/MovieInfoDescription";
import MovieShareBtn from "./MovieView/MovieShareBtn";
import MovieViewHeader from "./MovieView/MovieViewHead";

const MovieView = (props) => {
  useLayoutEffect(() => {
    props.getCurrentMovie(props.match.params.id);
    props.clearPrevSearches();
  }, []);
  return (
    <>
      <div className="container-fluid">
        {props.loading ? (
          <LoadingUI />
        ) : (
          <div className="row">
            <MovieViewHeader movie={props.currentMovie} />
            <MovieInfoDescription movie={props.currentMovie} />
            <div className="col-xl-9 col-lg-9">
              <div className="bg-white info-header shadow rounded mb-4">
                <div className="row d-flex align-items-center justify-content-between p-3 border-bottom">
                  <MovieBreadCrumb movie={props.currentMovie} />
                  <MovieAddToFavourite
                    movie={props.currentMovie}
                    addToFavourite={props.addToFavouriteBtn}
                  />
                </div>
                <div className="row d-flex align-items-center justify-content-between py-3 px-4">
                  <MovieBudget movie={props.currentMovie} />
                  <MovieShareBtn />
                </div>
              </div>
              <MovieFooter movie={props.currentMovie} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    currentMovie: state.currentMovie,
    loading: state.loading,
  };
}
export default connect(mapStateToProps, {
  getCurrentMovie,
  addToFavouriteBtn,
  clearPrevSearches,
})(MovieView);
