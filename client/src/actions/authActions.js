import { FETCH_USERS, NEW_USER, LOGIN, LOGOUT } from "./types";

export const addUser = (user) => (dispatch) => {
  console.log("Now in addUser AuthAction");

  fetch("http://localhost:5000/api/auth/addUser", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((err, data) => {
      console.log(err);
      if (!err) {
        dispatch({ type: NEW_USER, payload: data.user });
        console.log(JSON.stringify(data) + " added to DB successfully");
      }
    })
    .catch((err) => console.log("ERROR: " + err));
};

export const login = (credentials) => (dispatch) => {
  console.log("Now in login AuthAction");

  fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(credentials),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("userToken", data.token);
      dispatch({ type: LOGIN, payload: data.token });
      console.log("login response: " + JSON.stringify(data));
    })
    .catch((err) => console.log("ERROR: " + err));
};

export const logout = () => (dispatch) => {
  console.log("Now in logout AuthAction");

  localStorage.removeItem("userToken");
  dispatch({ type: LOGOUT });
};

export const fetchUsers = () => (dispatch) => {
  console.log("Now in fetchUser AuthAction");

  fetch("http://localhost:5000/api/auth/getUsers")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: FETCH_USERS, payload: data.users });
    });
};
