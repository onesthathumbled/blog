import React, { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    body: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/articles",
        formData
      );
      console.log(response.data);
    } catch (error) {}
  };

  return (
    <div className="PostForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Name of post"
          />
        </div>

        <div>
          <label>Body</label>
          <br />
          <textarea
            name="body"
            onChange={handleChange}
            value={formData.body}
            placeholder="Body of post"
          />
        </div>

        <div>
          <button>post</button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
