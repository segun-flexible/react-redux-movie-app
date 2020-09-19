import React from "react";
const MovieAddToFavourite = ({ movie, addToFavourite }) => {
  let icon = movie.isFavourite ? (
    <span>
      Remove From Favourite <i className="fas fa-minus fa-sm  ml-1"></i>{" "}
    </span>
  ) : (
    <span>
      Add To Favourite <i className="fas fa-plus fa-sm  ml-1"></i>{" "}
    </span>
  );

  return (
    <div className="col-lg-5 text-right">
      <button
        className="d-sm-inline-block btn btn-danger shadow-sm"
        onClick={() => addToFavourite(movie)}
      >
        {" "}
        {icon}
      </button>
    </div>
  );
};

export default MovieAddToFavourite;
