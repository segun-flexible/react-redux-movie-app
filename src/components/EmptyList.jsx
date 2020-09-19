import React from "react";
const EmptyList = ({ name }) => {
  return (
    <div className="alert  text-center emptylist" role="alert">
      <h5 className="alert-danger">{name} Is Empty</h5>
    </div>
  );
};

export default EmptyList;
