import { Link } from "react-router-dom";
import "../styles/NotFound.scss";

const NotFound = ({ message }) => {
  return (
    <div className="error">
      <h2>Sorry...</h2>
      <p>{message}</p>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
