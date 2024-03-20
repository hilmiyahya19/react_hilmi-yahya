import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
        <header className="bg-gray-100 mx-5 sm:mx-5 md:mx-5 lg:mx-0">
            <div className="container mx-auto flex justify-between items-center py-3">
                <div className="header-left">
                    <p className="m-0 text-lg font-semibold">Simple Header</p>
                </div>
                <div className="header-right md:text-center text-blue-600">
                <nav>
                    <ul className="flex space-x-3">
                        <li className="nav-item">
                            <Link className="nav-link text-primary font-semibold hover:text-blue-800" 
                            to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary font-semibold hover:text-blue-800" 
                            to="/features">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary font-semibold hover:text-blue-800" 
                            to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary font-semibold hover:text-blue-800" 
                            to="/faqs">FAQs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-primary font-semibold hover:text-blue-800" 
                            to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar