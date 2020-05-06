import { FETCH_BLOGS, NEW_BLOG } from "./types";
import { SERVER_URL } from "../globals";

export const fetchBlogs = () => (dispatch) => {
  console.log("SERVER_URL: " + SERVER_URL);
  console.log("fetchBlogs Action");
  fetch(`${SERVER_URL}/api/blogs/getAllBlogs`)
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: FETCH_BLOGS,
        payload: data.blogs,
      })
    );
};

export const createBlog = (blogData) => (dispatch) => {
  console.log("createBlog Action with blogData: " + JSON.stringify(blogData));
  fetch(`${SERVER_URL}/api/blogs/addBlog`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
    body: JSON.stringify(blogData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("After Blog Action: " + JSON.stringify(data));
      dispatch({
        type: NEW_BLOG,
        payload: data.blog,
      });
    })
    .catch((err) => console.log(err));
};
