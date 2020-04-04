import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  blogs: blogReducer
});

export default rootReducer;
