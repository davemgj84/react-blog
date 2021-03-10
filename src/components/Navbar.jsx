import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">The React Blog</Link>
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
          to="/create"
          activeStyle={{
            background: "#f1356d",
            color: "#fff",
          }}
        >
          New Blog
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
