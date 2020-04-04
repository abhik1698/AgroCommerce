import { FETCH_USERS, NEW_USER, LOGIN, LOGOUT } from "../actions/types";

const initialState = {
  users: [],
  newUser: {},
  token: localStorage.getItem("userToken"),
};

export default function authReducer(state = initialState, action) {
  console.log("Now in Auth Reducer");
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
    case NEW_USER:
      return { ...state, newUser: action.payload };
    case LOGIN:
      console.log(
        "token in localStorage: " + localStorage.getItem("userToken")
      );
      return { ...state, token: action.payload };
    case LOGOUT:
      return { ...state, token: null };
    default:
      return { ...state };
  }
}
