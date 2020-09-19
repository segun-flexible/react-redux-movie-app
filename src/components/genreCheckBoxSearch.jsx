import React from "react";
const GenreCheckBoxSearch = (props) => {
  const tetFun = (e) => {
    props.search(e.target.value);
  };
  return (
    <>
      <select onChange={tetFun}>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Animation">Animation</option>
        <option value="Comedy">Comedy</option>
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
        <option value="War">War</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Historical">Historical</option>
        <option value="Romance">Romantic</option>
      </select>
    </>
  );
};

export default GenreCheckBoxSearch;
