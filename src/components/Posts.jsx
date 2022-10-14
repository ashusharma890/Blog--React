import React, { useContext, useEffect, useState } from "react";
// import Post from "./Post";
import { BlogContext } from "../Contexts/BlogContext";

const Posts = () => {
  const { blogArr } = useContext(BlogContext);

  console.log(blogArr);
  return (
    <>
      <h1>Your Blogs</h1>
      {blogArr.map((blog, i) => {
        // console.log(blog);
        return (
          <div classNameName="card mb-3" key={i}>
            <img
              src="http://img.sxsw.com/2015/spg_images/IAP996844.png"
              className="card-img-top cardImg"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Blog {i + 1}</h5>
              <p className="card-text">{blog}</p>
              <p className="card-text">
                <small className="text">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
