import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div>
      <Link to={`/articles/${post.id}`}>
        <p>{post.name}</p>
        <p>{post.created_at}</p>
      </Link>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
