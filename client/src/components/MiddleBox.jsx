import React from "react";
import PostForm from "./PostForm";

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
      </div>
    </div>
  );
};

export default MiddleBox;
