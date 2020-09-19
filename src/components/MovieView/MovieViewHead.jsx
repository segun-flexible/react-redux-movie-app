import React from "react";

const MovieViewHeader = ({ movie }) => {
  return (
    <div className="col-xl-12 col-lg-12">
      <div className="cover-pic">
        <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-4 love-box">
          <h6 className="text-gray-900 mb-0 font-weight-bold">
            {" "}
            {movie.popularity}
            {movie.isFavourite ? (
              <i className="fas fa-heart text-danger"></i>
            ) : (
              <i className="fas fa-heart text-dark"></i>
            )}
          </h6>
          <small className="text-muted">{movie.vote_count}</small>
        </div>
        <img src={movie.img} className="img-fluid" alt={movie.title} />
      </div>
    </div>
  );
};

export default MovieViewHeader;
