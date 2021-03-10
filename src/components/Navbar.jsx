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
            background: "#f1356d",
            color: "#fff",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/myblogs"
          activeStyle={{
            background: "#f1356d",
            color: "#fff",
          }}
        >
          My Blogs
        </NavLink>
        <NavLink
          to="/create"
          activeStyle={{
            background: "#f1356d",
            color: "#fff",
          }}
        >
          Create
        </NavLink>
        <NavLink
          to="/login"
          activeStyle={{
            background: "#f1356d",
            color: "#fff",
          }}
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
