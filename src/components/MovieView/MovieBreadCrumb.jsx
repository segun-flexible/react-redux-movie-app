import React from "react";
const MovieBreadCrumb = ({ movie }) => {
  return (
    <div className="col-lg-7 m-b-4">
      <h3 className="text-gray-900 mb-0 mt-0 font-weight-bold">
        {movie.title}
      </h3>
      <p className="mb-0 text-gray-800">
        <small className="text-muted">
          <i className="fas fa-film fa-fw fa-sm mr-1"></i> {movie.genres}
        </small>
      </p>
    </div>
  );
};

export default MovieBreadCrumb;
