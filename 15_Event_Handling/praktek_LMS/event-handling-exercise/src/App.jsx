import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap';
import './App.css'
import { useState } from 'react';

function App() {

  const [copiedText, setCopiedText] = useState('');
  const handleCopy = () => {
    setCopiedText('Teks Berhasil di Salin')
    navigator.clipboard.writeText('Teks Berhasil di Salin')
    console.log('Teks Berhasil di Salin');
  }

  const [name, setName] = useState('');
  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const [email, setEmail] = useState('');
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name: ', name);
    console.log('Email: ', email);
  }

  const [position, setPosition] = useState({ x:0, y:0})
  const handleMouseMove = (e) => {
    setPosition({x:e.clientX, y:e.clientY})
  }

  const handleClick = (e) => {
    e.preventDefault();
    alert('anda menekan bagian ini')
  }

  const handleDelete = (id) => {
    alert('ID yang anda ingin hapus adalah ' + id)

  }

  return (
    <>
      <div className="container">
        <Form.Control className='mb-2' type='text' value={copiedText} readOnly/>
        <Button varian='primary' onClick={handleCopy}>Salin Text</Button>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Label>Name:</Form.Label>
          <Form.Control type='text' id='name' value={name} onChange={handleChangeName}/>
          <br />
          <Form.Label>Email:</Form.Label>
          <Form.Control type='email' id='email' value={email} onChange={handleChangeEmail}/>
          <br />
          <Button type='submit'>Submit</Button>
        </Form>
        <hr />
        <div onMouseMove={handleMouseMove}>
          <p>Gerakkan mouse Anda di area ini</p>
          <p>Posisi X : {position.x}</p>
          <p>Posisi Y : {position.y}</p>
        </div>
        <hr />
        <div onClick={handleClick}>
            <p>Coba anda klik di area ini</p>
        </div>
        <hr />
        <div>
          <div className='mt-2'>
            <Button variant='danger' onClick={() => handleDelete(1)}>Tombol Delete dengan ID 1</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
