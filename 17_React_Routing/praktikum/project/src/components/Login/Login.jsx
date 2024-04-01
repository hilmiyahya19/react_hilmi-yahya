import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State untuk menangani pesan kesalahan
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  // Menggunakan useState untuk mengelola isAuthenticated sebagai state
  // const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini Anda dapat menambahkan logika untuk memeriksa kredensial, misalnya dengan menyimpannya di state atau memanggil API
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem("isAuthenticated", "true");
      // setIsAuthenticated(true); // Memperbarui state isAuthenticated
      navigate("/home"); 
  } else {
    setError('Invalid username or password'); // Set pesan kesalahan
  }}

  useEffect(() => {
    if (isAuthenticated == "true") {
      console.log("anda sudah login");
      navigate("/home"); 
    }
  }, []); // [isAuthenticated, navigate] Menambahkan navigate ke dalam dependensi

  return (
    <div className="flex h-screen justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>} {/* Tampilkan pesan kesalahan */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-blue-600 focus:bg-blue-600">
            Login
          </button>
        <div className="text-gray-600 mt-4">
          <p className="mb-1">Username : admin</p>
          <p>Password : admin</p>
        </div>
      </form>
    </div>
  );
}

export default Login;
