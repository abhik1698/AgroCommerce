import { ADD_USER, LOGIN, LOGOUT } from "../actions/types";

const initialState = {
  newUser: {},
  token: localStorage.getItem("userToken"),
  addedUser: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      console.log("Now in ADD_USER Auth Reducer");
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
      console.log("Now in LOGIN Auth Reducer");
      return {
        ...state,
        token: action.payload,
      };
    case LOGOUT:
      console.log("Now in LOGOUT Auth Reducer");
      return { ...state, token: null };
    default:
      console.log("default Auth Reducer");
      return { ...state };
  }
}
