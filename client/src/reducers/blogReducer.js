import { FETCH_BLOGS, NEW_BLOG } from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

export default function blogReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BLOGS:
      console.log("Fetch Blog Reducer!");
      localStorage.setItem("blogs", action.payload);
      return {
        ...state,
        items: action.payload,
      };
    case NEW_BLOG:
      console.log("Add Blog Reducer!");
      return {
        ...state,
        item: action.payload,
      };
    default:
      console.log("default Blog Reducer!");
      return { ...state };
  }
}
