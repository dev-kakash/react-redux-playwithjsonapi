import { combineReducers } from "redux";
import { postReducer, selectedPost } from "./postReducer";

const reducers = combineReducers({
  allPosts: postReducer,
  post: selectedPost,
});

export default reducers;
