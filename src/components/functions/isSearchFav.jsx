import isAddedToFav from "./isAddedToFav";

const isSearchFav = (arr, oldState) => {
  let result = arr.reduce((acc, cur) => {
    let obj = { ...cur, isFavourite: isAddedToFav(cur.id, oldState) };
    acc.push(obj);
    return acc;
  }, []);
  return result;
};

export default isSearchFav;
