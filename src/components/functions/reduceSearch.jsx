const reduceSearch = (postsArr, searchTerm, type) => {
  const searchResults = postsArr.reduce((acc, cur) => {
    let regex = new RegExp(searchTerm, "gi");
    if (type === "genre") {
      if (regex.test(cur.genres)) {
        acc.push(cur);
      }
    } else {
      if (regex.test(cur.title)) {
        acc.push(cur);
      }
    }

    return acc;
  }, []);

  return [searchResults];
};

export default reduceSearch;
