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
            color: "#f1356d",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/create"
          activeStyle={{
            color: "#f1356d",
          }}
        >
          New Blog
        </NavLink>
        <NavLink
          to="/login"
          activeStyle={{
            color: "#f1356d",
          }}
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
