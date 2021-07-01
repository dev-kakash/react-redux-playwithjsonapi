import { ActionTypes } from "../constants/action-types";

const initialState = {
  posts: [],
};

export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POSTS:
      return { ...state, posts: payload };

    default:
      return state;
  }
};

export const selectedPost = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_POST:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};
