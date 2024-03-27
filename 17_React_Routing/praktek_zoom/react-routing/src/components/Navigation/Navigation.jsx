import { Link, Outlet } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <h1>Navigation</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* Ini tempat untuk menampilkan konten sub-rute */}
    </div>
  );
}

export default Navigation;
