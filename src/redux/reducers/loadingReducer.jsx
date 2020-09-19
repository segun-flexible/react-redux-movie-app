import { SET_LOADING } from "../types";

const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case SET_LOADING:
      return (state = action.payload);

    default:
      return state;
  }
};

export default loadingReducer;
