import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Pagination from "./Pagination";
import SearchMovieList from "./SeachMovieList";
const MovieList = (props) => {
  //Initially Setting The Post
  useEffect(() => {
    setPost([...props.movies]);
    setPageInfo({ ...pageInfo, currentPage: 1 });
  }, [props.movies]);

  const [pageInfo, setPageInfo] = useState({
    currentPage: 1,
    postPerPage: 4,
  });
  //Post State
  const [posts, setPost] = useState([]);

  //Pages Func
  let end = pageInfo.currentPage * pageInfo.postPerPage;

  let start = end - pageInfo.postPerPage;

  const setCurrentPage = (currentPage) => {
    setPageInfo({ ...pageInfo, currentPage });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mt-4 mb-3">
        <h1 className="h5 mb-0 text-gray-900">Movies</h1>
      </div>

      <div className="col-xl-12 col-lg-12">
        <div className="row">
          {posts.length > 0 &&
            posts
              .slice(start, end)
              .map((movie) => <SearchMovieList key={movie.id} movie={movie} />)}
        </div>
        <Pagination
          activePage={pageInfo.currentPage}
          setCurrentPage={setCurrentPage}
          pages={pageInfo.postPerPage}
          postArr={posts.length}
        />
      </div>
    </>
  );
};
function mapStateToProps(state) {
  return {
    movies: state.searchMovies,
  };
}
export default connect(mapStateToProps, null)(MovieList);
