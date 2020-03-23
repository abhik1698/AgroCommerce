import { FETCH_BLOGS, NEW_BLOG } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BLOGS:
      console.log("Reducer!");
      return {
        ...state,
        items: action.payload
      };
    case NEW_BLOG:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
