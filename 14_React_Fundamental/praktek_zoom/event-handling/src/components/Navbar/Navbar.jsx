function Navbar(props) {
  // Mendeteksi jika nama adalah "John"
  const isAdminJohn = props.nama === "John";

  return (
    <div>
      {/* Jika nama adalah "John", tampilkan pesan khusus */}
      {isAdminJohn && <p>Hai Kamu Admin {props.nama}</p>}
      {/* Jika nama bukan "John", tampilkan pesan default */}
      {!isAdminJohn && <p>Props dari App.js = {props.nama}</p>}
      <nav>
        {/* Isi dari navbar */}
      </nav>
    </div>
  );
}

export default Navbar;
