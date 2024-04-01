import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Website</h1>
        <p className="text-lg text-gray-700 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero vel justo commodo dapibus.</p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">Sign Up</button>
          <Link to={'/login'}>
            <button className="ml-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">Log In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
