import { FETCH_USERS, NEW_USER, LOGIN, LOGOUT } from "../actions/types";

const initialState = {
  users: [],
  newUser: {},
  token: localStorage.getItem("userToken"),
  addedUser: false,
};

export default function authReducer(state = initialState, action) {
  console.log("Now in Auth Reducer");
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
    case NEW_USER:
      if (!action.payload) {
        return {
          ...state,
          newUser: action.payload,
          addedUser: false,
        };
      }
      console.log(JSON.stringify(action.payload) + " added to DB successfully");
      return {
        ...state,
        newUser: action.payload,
        addedUser: true,
      };
    case LOGIN:
      return { ...state, token: action.payload };
    case LOGOUT:
      return { ...state, token: null };
    default:
      return { ...state };
  }
}
