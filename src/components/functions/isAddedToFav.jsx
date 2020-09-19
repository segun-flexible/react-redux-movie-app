//Checking if our search movie is already added in the favourite List
const isAddedToFav = (id, st) => {
  let check = st.findIndex((f) => f.id === id);
  return check > -1 ? true : false;
};

export default isAddedToFav;
