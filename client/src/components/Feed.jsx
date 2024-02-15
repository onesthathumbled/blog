import axios from "axios";
import React, { useEffect, useState } from "react";
import Posts from "./Posts";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/articles");
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="Posts">
      <h3>Posts</h3>
      {loading ? <p>Loading...</p> : <Posts posts={posts} />}
    </div>
  );
};

export default Feed;
