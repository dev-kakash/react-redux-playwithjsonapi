import React from "react";
import { useSelector } from "react-redux";

const Post = () => {
  const posts = useSelector((state) => state.allPosts.posts);
  const renderList = posts.map((post) => {
    const { id, title, body } = post;
    return (
      <div className="four wide column" key={id}>
        <div className="ui link cards">
          <div className="card">
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">{body}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default Post;
