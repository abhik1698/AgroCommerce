import { combineReducers } from "redux";
import blogReducer from "./blogReducer";

export default combineReducers({
  blogs: blogReducer
});
