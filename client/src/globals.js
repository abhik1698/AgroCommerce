const NODE_ENV = "prod";

export const SERVER_URL =
  NODE_ENV === "prod" ? "http://leact.herokuapp.com" : "http://localhost:5000";
