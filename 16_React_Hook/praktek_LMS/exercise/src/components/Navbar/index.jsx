import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <nav className="navbar">
        <div>
          <h1>Navbar</h1>
        </div>
        <div>
          <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/covid/indonesia">Navbar</Link>
            </li>
            <li>
                <Link to="/covid/provinsi">Navbar</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;