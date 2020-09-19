//Function for Trimminng the query
const trimQuery = (query) => {
  const newTrimQuery = query.split(" ").join("+");
  return newTrimQuery;
};

export default trimQuery;
