import { FETCH_USERS, LOGIN, LOGOUT } from "./types";

const serverURL = process.env.serverURL || "http://localhost:5000";

export const login = (credentials) => (dispatch) => {
  console.log("Now in login AuthAction");

  fetch(`${serverURL}/api/auth/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(credentials),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        localStorage.setItem("userToken", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log(data);
        dispatch({
          type: LOGIN,
          payload: data.token,
        });
      }
    })
    .catch((err) => console.log("ERROR: " + err));
};

export const logout = () => (dispatch) => {
  console.log("Now in logout AuthAction");

  localStorage.removeItem("userToken");
  localStorage.removeItem("user");
  dispatch({ type: LOGOUT });
};

export const fetchUsers = () => (dispatch) => {
  console.log("Now in fetchUser AuthAction");

  fetch(`${serverURL}/api/auth/getUsers`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: FETCH_USERS, payload: data.users });
    });
};
