import { useState } from "react";
import "../styles/Create.scss";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("David");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const blog = {
      title,
      body,
      author,
    };
    console.log(blog);
  };

  return (
    <div className="create">
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(evt) => setBody(evt.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(evt) => setAuthor(evt.target.value)}>
          <option value="David">David</option>
          <option value="Kim">Kim</option>
        </select>
        <button>Create Blog</button>
      </form>
    </div>
  );
};

export default Create;
