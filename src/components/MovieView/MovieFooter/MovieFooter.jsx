import React from "react";
const MovieFooter = ({ movie }) => {
  return (
    <div className="bg-white p-3 widget shadow rounded mb-4">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Summary
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <h5 className="mt-0 mb-3">{movie.title}</h5>
          {movie.overview}
        </div>
      </div>
    </div>
  );
};
/* movie.overview */
export default MovieFooter;
