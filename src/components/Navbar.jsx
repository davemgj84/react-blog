import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <a href="/">The React Blog</a>
      </h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
