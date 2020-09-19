import { saveToLocalStorage } from "../../components/functions/localStorage";
import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../types";

const addToFavouriteReducer = (
  state = JSON.parse(localStorage.getItem("favourite")) || [],
  action
) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      saveToLocalStorage([...state, action.payload.movie], "favourite");
      return [...state, action.payload.movie];

    case REMOVE_FROM_FAVOURITE:
      saveToLocalStorage([...action.payload.favourite], "favourite");
      return [...action.payload.favourite];
    default:
      return state;
  }
};

export default addToFavouriteReducer;
