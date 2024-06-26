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
                  <img src={`/img/fire.png`} alt="logo" className="w-10 h-10 mx-5"/>
                </div>
            <div className="header-right md:text-center text-blue-600 mx-3">
                <nav>
                    <ul className="flex space-x-3">
                        <NavItem to="/" currentPath={location.pathname}>Home</NavItem>
                        <NavItem to="/products" currentPath={location.pathname}>Products</NavItem>
                        <NavItem to="/about" currentPath={location.pathname}>About</NavItem>
                        <NavItem to="/contacts" currentPath={location.pathname}>Contacts</NavItem>
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
