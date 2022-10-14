import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import React, { useState } from "react";
import Posts from "./components/Posts";
import { BlogContext } from "./Contexts/BlogContext";

function App() {
  const [showBlog, setShowBlog] = useState(false);
  const [blogPost, setBlogPost] = useState("");
  const [blogArr, setBlogArr] = useState([]);
  return (
    <>
      <div className="App">
        <Navbar />
        <BlogContext.Provider
          value={{
            showBlog,
            blogPost,
            setBlogPost,
            setShowBlog,
            blogArr,
            setBlogArr,
          }}
        >
          {showBlog ? <Posts /> : <Post />}
        </BlogContext.Provider>
      </div>
    </>
  );
}

export default App;
