import "../styles/Home.scss";
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My New Website", body: "lorem ipsum...", author: "David", id: 1 },
    { title: "Welcome Party!", body: "lorem ipsum...", author: "David", id: 2 },
    { title: "React Tips", body: "lorem ipsum...", author: "David", id: 3 },
  ]);

  const handleClick = () => {};

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
    </div>
  );
};

export default Home;
