import "./App.css";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import React, { useState } from "react";
import Posts from "./components/Posts";
import { BlogContext } from "./Contexts/BlogContext";

function App() {
  const [showBlog, setShowBlog] = useState(false);
  const [blogPost, setBlogPost] = useState("");
  return (
    <>
      <div className="App">
        <Navbar />
        <BlogContext.Provider value={{ blogPost, setBlogPost, setShowBlog }}>
          {showBlog ? <Posts /> : <Post />}
        </BlogContext.Provider>
      </div>
    </>
  );
}

export default App;
