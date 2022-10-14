import React, { useContext } from "react";
// import Post from "./Post";
import { BlogContext } from "../Contexts/BlogContext";

const Posts = () => {
  const [blogArr, setBlogArr] = useState([]);
  const { blogPost } = useContext(BlogContext);
  blogArr.push(blogPost);
  console.log(blogPost);
  return (
    <>
      <h1>Your Blogs</h1>
      {blogArr.map((blog, i) => {
        // console.log(blog);
        <div class="card mb-3" key={i} i={i}>
          <img
            src="http://img.sxsw.com/2015/spg_images/IAP996844.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Blog {i}</h5>
            <p class="card-text">{blog}</p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>;
      })}
    </>
  );
};

export default Posts;
