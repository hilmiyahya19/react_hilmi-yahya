import StyledButton from "./components/Button/Button.styled";
import Navbar from "./components/Navbar/Navbar";
// import style from "./assets/module.css";
import style from "./assets/css/style.module.css"

function App() {
  let klik = "indonesia"; // Mendefinisikan variabel 'klik' dengan nilai 'indonesia'

  const members = ["Hilmi", "Nazar", "Nabraska"]; // Array anggota
  // Mapping array anggota menjadi elemen-elemen <li>
  const memberList = members.map(function(member) {
    return <li key={member}>{member}</li>; // Setiap anggota akan diubah menjadi elemen <li>
  });

  const handleUsernameChange = (event) => {
    console.log(event.target.value); // Menampilkan nilai input username ke console
  };

  const handlePasswordChange = (event) => {
    console.log(event.target.value); // Menampilkan nilai input password ke console
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Mencegah perilaku default dari form
    console.log('Form submitted'); // Menampilkan pesan ke console saat form disubmit
    // Di sini bisa ditambahkan logika untuk mengirim data ke server atau melakukan operasi lainnya
  };

  return (
    <>
      <h1>Halaman App</h1> {/* Judul halaman */}
      <p className={style["red-text"]}>Hero Section</p>
      <p className={style["red-blue"]}>paragraf</p>
      <Navbar nama="John" /> {/* Komponen Navbar dengan prop 'nama' bernilai 'John' */}
      <h2>Members:</h2> {/* Subjudul untuk daftar anggota */}
      <ul>
        {memberList} {/* Daftar anggota yang telah dimapping */}
      </ul>
      {/* Button dengan operator ternary */}
      <StyledButton>{klik === "indonesia" ? 'tombol' : 'button'}</StyledButton> {/* Tombol yang menyesuaikan nilai variabel 'klik' */}
      {/* Form untuk input username dan password */}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username" 
          onChange={handleUsernameChange} // Event onChange dengan inline function
        />
        <input 
          type="password" 
          placeholder="Password" 
          onChange={(event) => handlePasswordChange(event)} // Event onChange dengan arrow function
        />
        {/* Button submit */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
