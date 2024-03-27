import { useState } from 'react';

// Login
function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk menentukan status login

  // Fungsi untuk menangani login
  const handleLogin = () => {
    // Simulasi logika autentikasi
    // Di sini Anda bisa melakukan proses autentikasi sesuai dengan kebutuhan aplikasi Anda
    // Contoh sederhana: Set status login menjadi true
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Login Page</h1>
      {!isLoggedIn ? (
        // Jika belum login, tampilkan form login
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      ) : (
        // Jika sudah login, tampilkan elemen dinamis
        <div>
          <h2>Selamat datang!</h2>
          {/* Tambahkan elemen dinamis di sini */}
        </div>
      )}
    </div>
  );
}

export default Login;
