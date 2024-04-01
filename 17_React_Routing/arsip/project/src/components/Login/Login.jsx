import { useState } from 'react';
import PropTypes from 'prop-types'; 

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

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
      onLogin(); // Panggil fungsi onLogin jika kredensial benar
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-200">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {loginError && <p className="text-red-500 mb-2">Invalid username or password</p>}
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
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired, 
};

export default Login;
