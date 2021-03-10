import "../styles/Home.scss";
import { Link } from "react-router-dom";
import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="home">
      {error && (
        <div className="error">
          <h2>Sorry...</h2>
          <p>{error}</p>
          <Link to="/home">
            <button>Try Again...</button>
          </Link>
        </div>
      )}
      {isLoading && (
        <div className="loading">
          <h2>
            Loading<span>...</span>
          </h2>
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "David")}
          title="My Blogs!"
        />
      )}
    </div>
  );
};

export default Home;
