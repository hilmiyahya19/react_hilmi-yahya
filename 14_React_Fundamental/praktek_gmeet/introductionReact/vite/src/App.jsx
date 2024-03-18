import StyledButton from "./components/Button/Button.Styled";
import Navbar from "./components/Navbar/Navbar";

function App() {
  let klik = "indonesia"; // Mendefinisikan variabel 'klik' dengan nilai 'indonesia'

  const members = ["Hilmi", "Nazar", "Nabraska"]; // Array anggota
  // Mapping array anggota menjadi elemen-elemen <li>
  const memberList = members.map(function(member) {
    return <li>{member}</li>; // Setiap anggota akan diubah menjadi elemen <li>
  });

  return (
    <>
      <h1>Halaman App</h1> {/* Judul halaman */}
      <p>Hero Section</p> {/* Bagian hero */}
      <Navbar nama="John" /> {/* Komponen Navbar dengan prop 'nama' bernilai 'John' */}
      <h2>Members:</h2> {/* Subjudul untuk daftar anggota */}
      <ul>
        {memberList} {/* Daftar anggota yang telah dimapping */}
      </ul>
      {/* Button dengan operator ternary */}
      <StyledButton>{klik === "indonesia" ? 'tombol' : 'button'}</StyledButton> {/* Tombol yang menyesuaikan nilai variabel 'klik' */}
    </>
  );
}

export default App;
