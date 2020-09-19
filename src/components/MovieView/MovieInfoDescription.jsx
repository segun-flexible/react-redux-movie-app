import React from "react";

const MovieInfoDescription = ({ movie }) => {
  return (
    <div className="col-xl-3 col-lg-3">
      <div className="bg-white p-3 widget shadow rounded mb-4">
        <img
          src={movie.img}
          className="img-fluid rounded desc-img"
          alt={movie.title}
        />
        <h1 className="h6 mb-0 mt-3 font-weight-bold text-gray-900">Status</h1>
        <p>{movie.status}</p>
      </div>
    </div>
  );
};

export default MovieInfoDescription;
