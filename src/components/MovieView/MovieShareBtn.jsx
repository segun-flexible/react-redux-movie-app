import React from "react";
const MovieShareBtn = () => {
  return (
    <div className="col-lg-6 text-right">
      <button className="btn btn-sm btn-primary btn-circle">
        <i className="fab fa-facebook-f"></i>
      </button>
      <button className="btn btn-sm btn-danger btn-circle">
        <i className="fab fa-youtube"></i>
      </button>
      <button className="btn btn-sm btn-warning btn-circle">
        <i className="fab fa-snapchat-ghost"></i>
      </button>
      <button className="btn btn-sm btn-info btn-circle">
        <i className="fab fa-twitter"></i>
      </button>
    </div>
  );
};

export default MovieShareBtn;
