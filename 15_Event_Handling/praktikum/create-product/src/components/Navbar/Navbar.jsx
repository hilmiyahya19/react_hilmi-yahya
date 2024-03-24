import { useLocation } from "react-router-dom";
import NavItem from "./NavItem";

function Navbar() {
  const location = useLocation();

  return (
    <>
      <header className="bg-gray-100 shadow-lg">
        <div className="mx-2 sm:mx-5 md:mx-5 lg:mx-5">
            <div className="container mx-auto flex justify-between items-center py-3">
                <div className="header-left">
                    <p className="m-0 text-lg font-semibold">Simple Header</p>
                </div>
            <div className="header-right md:text-center text-blue-600">
                <nav>
                    <ul className="flex space-x-3">
                        <NavItem to="/" currentPath={location.pathname}>Home</NavItem>
                        <NavItem to="/features" currentPath={location.pathname}>Features</NavItem>
                        <NavItem to="/pricing" currentPath={location.pathname}>Pricing</NavItem>
                        <NavItem to="/faqs" currentPath={location.pathname}>FAQs</NavItem>
                        <NavItem to="/about" currentPath={location.pathname}>About</NavItem>
                    </ul>
                </nav>
            </div>
            </div>
        </div>      
      </header>
    </>
  );
}

export default Navbar;
