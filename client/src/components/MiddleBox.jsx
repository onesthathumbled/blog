import React from "react";
import PostForm from "./PostForm";
import Feed from "./Feed";

const MiddleBox = () => {
  return (
    <div className="MiddleBox">
      <div className="title-container">
        <a href="/posts" className="title">
          feed
        </a>
      </div>

      <div>
        <PostForm />
        <Feed />
      </div>
    </div>
  );
};

export default MiddleBox;
