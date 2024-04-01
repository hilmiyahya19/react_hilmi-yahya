import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../ui/Modal/Modal";
import Button from "../ui/Button/Button";

function Logout() {
 const navigate = useNavigate();
 const [showModal, setShowModal] = useState(false);

 useEffect(() => {
    console.log("Modal show:", showModal); // Debugging, menggunakan showModal dari state
 }, [showModal]); // Menambahkan showModal ke dalam array dependensi

 const handleLogout = () => {
    // Hapus status autentikasi dari local storage
    localStorage.setItem("isAuthenticated", "false");
    // Arahkan pengguna ke halaman login
    navigate("/login");
 };

 const handleCloseModal = (event) => {
    event.stopPropagation(); // Mencegah event dari dipropagasi
    console.log("Tombol Batal ditekan"); // Debugging
    setShowModal(false);
 };

 const handleShowModal = () => {
    setShowModal(true);
    console.log("Modal show:", showModal);
 };

 return (
    <div>
      <h1>Selamat datang di halaman logout</h1>
      <Button onClick={handleShowModal}>Logout</Button>

      {/* Modal untuk konfirmasi logout */}
      <Modal show={showModal} onClose={handleCloseModal} backdrop={true}>
        <h2>Anda yakin ingin logout?</h2>
        <div className="flex justify-end mt-4">
          <Button className="mr-4" onClick={handleCloseModal}>
            Batal
          </Button>
          <Button onClick={handleLogout} variant="delete">
            Logout
          </Button>
        </div>
      </Modal>
    </div>
 );
}

export default Logout;
