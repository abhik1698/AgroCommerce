import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
  console.log("Fetching");
  fetch("http://localhost:5000/api/posts/getPosts")
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: FETCH_POSTS,
        payload: data.posts
      })
    );
};

export const createPost = postData => dispatch => {
  console.log("Before Posting Action: " + JSON.stringify(postData));
  fetch("http://localhost:5000/api/posts/addPost", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(data => {
      console.log("After Posting Action: " + JSON.stringify(data));
      dispatch({
        type: NEW_POST,
        payload: data.post
      });
    })
    .catch(err => console.log(err));
};
