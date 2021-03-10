import { Link } from "react-router-dom";
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry...</h2>
      <p>That page connot be found...</p>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
