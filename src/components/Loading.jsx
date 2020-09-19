import React from "react";

const LoadingUI = () => {
  return (
    <div className="loading text-center mt-1 mb-4 col-12">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingUI;
