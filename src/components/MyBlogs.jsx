import "../styles/MyBlogs.scss";
import BlogList from "./BlogList";
import NotFound from "./NotFound";
import useFetch from "../hooks/useFetch";

const MyBlogs = () => {
  const { data: blogs, isLoading, error } = useFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="my-blogs">
      {error && <NotFound error={error} message={error} />}
      {isLoading && (
        <div className="loading">
          <h2>
            Loading<span>...</span>
          </h2>
        </div>
      )}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "David")}
          title="My Blogs!"
        />
      )}
    </div>
  );
};

export default MyBlogs;
