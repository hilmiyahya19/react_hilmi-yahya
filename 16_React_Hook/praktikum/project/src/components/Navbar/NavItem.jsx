import { Link } from "react-router-dom";

function NavItem({ to, children, currentPath }) {
  const isActive = currentPath === to;

  return (
    <li className="nav-item">
      <Link
        className={`nav-link text-primary font-semibold ${
          isActive ? 'text-white bg-blue-500 px-2 py-1 rounded' : ''}`}
        to={to}
      >
        {children}
      </Link>
    </li>
  );
}

export default NavItem;
