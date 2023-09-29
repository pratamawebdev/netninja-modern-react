import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const [name, setName] = useState("Mario");
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>loading ...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Mario")}
        title="Mario's Blogs!"
        handleDelete={handleDelete}
      /> */}
      <button onClick={() => setName("Luigy")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
