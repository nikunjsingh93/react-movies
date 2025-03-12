import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Niks Movie DB</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Trending Movies</Link>
        <Link to="/favorites" className="nav-link">Favorite Movies</Link>
      </div>
    </nav>
  );
}

export default NavBar
