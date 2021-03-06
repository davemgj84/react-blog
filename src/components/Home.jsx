import "../styles/Home.scss";
import BlogList from "./BlogList";
import NotFound from "./NotFound";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="home">
      {error && <NotFound error={error} message={error} />}
      {isLoading && (
        <div className="loading">
          <h2>
            Loading<span>...</span>
          </h2>
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
