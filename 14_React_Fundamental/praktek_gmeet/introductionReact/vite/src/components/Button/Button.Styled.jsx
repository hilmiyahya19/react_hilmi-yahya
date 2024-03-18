import styled from "styled-components";

// Komponen StyledButton yang telah ditambahkan gaya
const StyledButton = styled.button`
  background-color: #007bff; /* Warna latar belakang */
  color: #fff; /* Warna teks */
  padding: 10px 20px; /* Padding */
  border: none; /* Tanpa border */
  border-radius: 5px; /* Sudut bulat */
  cursor: pointer; /* Pointer ketika diarahkan */
  transition: background-color 0.3s ease; /* Transisi warna latar belakang */
  
  /* Gaya saat tombol dihover */
  &:hover {
    background-color: #0056b3; /* Warna latar belakang saat dihover */
  }
`;

export default StyledButton;
