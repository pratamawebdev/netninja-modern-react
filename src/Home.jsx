import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My New Website",
      body: "lorem ipsum dolor sit amet ...",
      author: "Mario",
      id: 1,
    },
    {
      title: "Welcome Party!",
      body: "lorem ipsum dolor sit amet ...",
      author: "Yoshi",
      id: 2,
    },
    {
      title: "Web Dev Top Tips",
      body: "lorem ipsum dolor sit amet ...",
      author: "Brandon",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Mario")}
        title="Mario's Blogs!"
      />
    </div>
  );
};

export default Home;
