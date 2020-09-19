import React from "react";
import { Link } from "react-router-dom";

const SearchMovieList = ({ movie }) => {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card m-card shadow border-0">
        <Link to={`/movie/${movie.id}`}>
          <div className="m-card-cover">
            <div className="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
              <h6 className="text-gray-900 mb-0 font-weight-bold">
                {movie.isFavourite ? (
                  <i className="fas fa-heart text-danger"></i>
                ) : (
                  <i className="fas fa-heart text-dark"></i>
                )}{" "}
                {movie.popularity}
              </h6>
              <small className="text-muted">{movie.total_views}</small>
            </div>
            <img src={movie.img} className="card-img-top" alt={movie.title} />
          </div>
          <div className="card-body p-3">
            <h5 className="card-title text-gray-900 mb-1">{movie.title}</h5>
            <p className="card-text">
              <small className="text-muted">
                {movie.language.toLocaleUpperCase()}
              </small>{" "}
              <small className="text-danger">
                <i className="fas fa-calendar-alt fa-sm text-gray-400"></i>{" "}
                {movie.release_date}
              </small>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SearchMovieList;
