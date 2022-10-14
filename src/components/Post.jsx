import React, { useState, useContext } from "react";
import { BlogContext } from "../Contexts/BlogContext";

const Post = () => {
  const { setBlogPost, setShowBlog, blogPost, setBlogArr } =
    useContext(BlogContext);

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlogPost(input);
    setBlogArr((prev) => [...prev, input]);
    setInput("");
  };
  console.log(blogPost);

  return (
    <>
      <div className="container">
        <div className="mb-3 form ">
          <label className="form-label">Enter your blog text</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={handleChange}
            autoFocus={true}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-lg btn-success"
          onClick={(e) => {
            setShowBlog(true);
            handleSubmit(e);
          }}
        >
          Add Blog
        </button>
      </div>
    </>
  );
};

export default Post;
