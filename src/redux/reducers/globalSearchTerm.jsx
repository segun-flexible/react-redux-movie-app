const { SET_GLOBAL_SEARCH_TERM } = require("../types");

const gloBalSearchTerm = (state = "", action) => {
  switch (action.type) {
    case SET_GLOBAL_SEARCH_TERM:
      return action.payload;

    default:
      return state;
  }
};

export default gloBalSearchTerm;
