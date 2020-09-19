import React from "react";
const MovieBudget = ({ movie }) => {
  return (
    <div className="col-lg-6 m-b-4">
      <p className="mb-0 text-gray-900">
        <i className="fas fa-money-bill fa-sm fa-fw mr-1"></i> BUDGET -{" "}
        <span className="text-white rounded px-2 py-1 bg-info">
          ${movie.budget}
        </span>
      </p>
    </div>
  );
};

export default MovieBudget;
