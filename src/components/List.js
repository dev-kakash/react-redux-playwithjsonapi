import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../redux/actions/postsActions";
import axios from "axios";
import Post from "./Post";

const List = () => {
  const posts = useSelector((state) => state.allPosts.posts);
  const dispatch = useDispatch();

  const fetchPost = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .catch((error) => {
        console.log(error);
      });
    dispatch(setPosts(response.data));
  };

  useEffect(() => {
    fetchPost();
  }, []);
  console.log(posts);
  return (
    <div className="ui grid container">
      <Post />
    </div>
  );
};

export default List;
