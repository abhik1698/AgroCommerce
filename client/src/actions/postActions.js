import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
  console.log("Fetching");
  fetch("http://localhost:5000/getPosts")
    .then(response => response.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
  console.log("Posting Action!: " + JSON.stringify(postData));
  fetch("http://localhost:5000/addPost", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post => {
      console.log("Posting Action!" + post);
      dispatch({
        type: NEW_POST,
        payload: post
      });
    })
    .catch(err => console.log(err));
};
