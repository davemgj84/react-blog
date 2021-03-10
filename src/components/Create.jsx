import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Create.scss";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("David");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const blog = {
      title,
      body,
      author,
    };
    setIsLoading(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsLoading(false);
      history.push("/home");
    });
  };

  return (
    <div className="create">
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />
        <label>Body:</label>
        <textarea
          required
          value={body}
          onChange={(evt) => setBody(evt.target.value)}
        ></textarea>
        <label>Author:</label>
        <select value={author} onChange={(evt) => setAuthor(evt.target.value)}>
          <option value="David">David</option>
          <option value="Kim">Kim</option>
        </select>
        {!isLoading && <button>Create</button>}
        {isLoading && <button disabled>Creating...</button>}
      </form>
    </div>
  );
};

export default Create;
