import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">
          <i className="fab fa-react"></i> React Blog
        </Link>
      </h1>
      <div className="links">
        <NavLink
          to="/home"
          activeStyle={{
            background: "#bb0a1e",
            color: "#fff",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/myblogs"
          activeStyle={{
            background: "#bb0a1e",
            color: "#fff",
          }}
        >
          My Blogs
        </NavLink>
        <NavLink
          to="/create"
          activeStyle={{
            background: "#bb0a1e",
            color: "#fff",
          }}
        >
          Create
        </NavLink>
        <Link to="/home">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
