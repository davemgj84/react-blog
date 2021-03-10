import { useHistory, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import useFetch from "../hooks/useFetch";
import "../styles/BlogDetails.scss";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  const history = useHistory();

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/home");
    });
  };

  return (
    <div className="blog-details">
      {isLoading && (
        <div className="loading">
          <h2>
            Loading<span>...</span>
          </h2>
        </div>
      )}
      {error && <NotFound message={error} />}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
