import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Table } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid'; // Import library uuid

function App() {
  const [data, setData] = useState([
    {
      id: uuidv4(), // Gunakan uuid untuk menambahkan nomor unik
      nama: 'Hilmi',
      umur: 21,
      jenisKelamin: 'Laki-laki'
    },
    {
      id: uuidv4(),
      nama: 'Yahya',
      umur: 22,
      jenisKelamin: 'Laki-laki'
    },
  ]);
  
  const [editData, setEditData] = useState(null); // State untuk menyimpan data yang akan diedit

  useEffect (() => {
    setData(data);
  }, [data]);

  const addData = () => {
    if (nama === '' || umur === '' || jenisKelamin === ''){
      alert('Semua data harus diisi');
      return;
    }

    const newData = {
      id: uuidv4(), // Gunakan uuid untuk menambahkan nomor unik
      nama: nama,
      umur: umur,
      jenisKelamin: jenisKelamin,
    };

    setData([...data, newData]);

    setNama('');
    setUmur('');
    setJenisKelamin('');
  }

  const [nama, setNama] = useState('');
  const [umur, setUmur] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');

  const deleteData = (id) => { // Perubahan parameter menjadi id
    const newData = data.filter((item) => item.id !== id); // Perubahan filter berdasarkan id
    setData(newData);
  }

  const handleEditData = (id) => { // Perubahan parameter menjadi id
    const editItem = data.find(item => item.id === id); // Perubahan pencarian berdasarkan id
    setEditData(editItem);
    setNama(editItem.nama);
    setUmur(editItem.umur);
    setJenisKelamin(editItem.jenisKelamin);
  }

  const updateData = () => {
    if (nama === '' || umur === '' || jenisKelamin === ''){
      alert('Semua data harus diisi');
      return;
    }

    const updatedData = data.map(item => {
      if (item.id === editData.id) {
        return {
          id: item.id, // Menjaga id tetap
          nama: nama,
          umur: umur,
          jenisKelamin: jenisKelamin,
        };
      }
      return item;
    });

    setData(updatedData);

    setEditData(null);
    setNama('');
    setUmur('');
    setJenisKelamin('');
  }

  return (
    <>
      <div className='container'>
        <h1>Daftar</h1>
        <Table striped bordered hover className='table'>
          <thead>
            <tr>
              <th>#</th> {/* Kolom nomor */}
              <th>Nama</th>
              <th>Umur</th>
              <th>Jenis Kelamin</th>
              <th>Hapus Data</th>
              <th>Edit Data</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => ( // Menggunakan index untuk nomor
              <tr key={item.id}>
                <td>{index + 1}</td> {/* Nomor ditambahkan di sini */}
                <td>{item.nama}</td>
                <td>{item.umur}</td>
                <td>{item.jenisKelamin}</td>
                <td>
                  <Button variant='danger' onClick={() => deleteData(item.id)}>Hapus Data</Button>
                </td>
                <td>
                  <Button variant='success' onClick={() => handleEditData(item.id)}>Edit Data</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Form>
          <Form.Group>
            <Form.Label>Nama:</Form.Label>
            <Form.Control
            type='text'
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Umur:</Form.Label>
            <Form.Control
            type='number'
            value={umur}
            onChange={(e) => setUmur(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Jenis Kelamin:</Form.Label>
            <Form.Control
            as='select'
            value={jenisKelamin}
            onChange={(e) => setJenisKelamin(e.target.value)}
            >
              <option value="">Pilih Jenis Kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </Form.Control>
          </Form.Group>
          {editData ? (
            <Button className='mt-3' variant='warning' type='button' onClick={updateData}>Update Data</Button>
          ) : (
            <Button className='mt-3' variant='primary' type='button' onClick={addData}>Tambah Data</Button>
          )}
        </Form>
      </div>
    </>
  )
}

export default App;
