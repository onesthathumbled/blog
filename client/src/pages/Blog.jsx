import React from "react";
import LeftMenu from "../components/LeftMenu";
import MiddleBox from "../components/MiddleBox";
import RightMenu from "../components/RightMenu";

const Blog = () => {
  return (
    <div className="Blog">
      <LeftMenu />
      <MiddleBox />
      <RightMenu />
    </div>
  );
};

export default Blog;
