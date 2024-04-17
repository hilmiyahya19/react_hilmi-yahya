import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [nameEdit, setNameEdit] = useState('');
  const [ageEdit, setAgeEdit] = useState('');

  async function fetchData() {
    const response = await axios.get(`https://660fae7f356b87a55c520818.mockapi.io/users`);
    setData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = async (id) => {
    console.log(`Deleting user with id: ${id}`);
    await axios.delete(`https://660fae7f356b87a55c520818.mockapi.io/users/${id}`);
    fetchData();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Adding user:', name, age);
    await axios.post('https://660fae7f356b87a55c520818.mockapi.io/users', { name, age });
    setName('');
    setAge('');
    fetchData();
  };

  const handleSubmitEdit = async (e, id) => {
    e.preventDefault();
    console.log('Editing user:', nameEdit, ageEdit, id);
    await axios.put(`https://660fae7f356b87a55c520818.mockapi.io/users/${id}`, { name: nameEdit, age: ageEdit });
    setNameEdit('');
    setAgeEdit('');
    fetchData();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4 font-semibold">Fetch Data with Axios</h1>
      <form onSubmit={handleSubmit} className="flex flex-col mb-4">
        <input 
          type="text" 
          placeholder="add name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="py-1 input input-bordered mb-2 md:w-auto border rounded-md focus:outline-none focus:border-blue-500"
        />
        <input 
          type="number" 
          placeholder="add age" 
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="py-1 input input-bordered mb-2 md:w-auto border rounded-md focus:outline-none focus:border-blue-500"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
      {data.map((user) => (
        <div key={user.id} className="mb-4 p-4 border rounded">
          <p className="mt-2">Name : {user.name}</p>
          <p>Age : {user.age}</p>
          <img src={user.image} alt="User" className="mt-2 mb-4 rounded" />
          <button 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleClick(user.id)}
          >
            Delete
          </button>
          <form onSubmit={(e) => handleSubmitEdit(e, user.id)} className="mt-4">
            <input 
              type="text" 
              placeholder="edit name" 
              value={nameEdit}
              onChange={(e) => setNameEdit(e.target.value)}
              className="py-1 input input-bordered mb-2 md:w-auto border rounded-md focus:outline-none focus:border-blue-500"
            />
            <input 
              type="number" 
              placeholder="edit age" 
              value={ageEdit}
              onChange={(e) => setAgeEdit(e.target.value)}
              className="py-1 input input-bordered mb-2 md:w-auto border rounded-md focus:outline-none focus:border-blue-500"
            />
            <br />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default App;
