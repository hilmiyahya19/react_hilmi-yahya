import { useState } from 'react';
import './App.css'
import List from './components/List/List';

function App() {
  const foods = [
    {id: 1, name:"Nasi Goreng", description:"nasi yang digoreng", price:25000},
    {id: 2, name:"Ayam Goreng", description:"ayam yang digoreng", price:35000},
    {id: 3, name:"Roti Bakar", description:"roti yang dibakar", price:15000},
  ];
  const drinks = [
    {id: 4, name:"STMJ", description:"susu telur madu jahe", price:10000},
    {id: 5, name:"Kopi Susu", description:"kopi plus susu", price:5000},
    {id: 6, name:"Teh Tawar", description:"gak ada gulanya kok", price:3000},
  ];

  const [title, setTitle] = useState("Foods");
  const [items, setItems] = useState(foods);
  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setClicked(!clicked);
    if (clicked){
      setTitle("Drinks");
      setItems(drinks);
    } else {
      setTitle("Foods");
      setItems(foods);
    }

  }

  return (
    <>
      <List title={title} items={items}/> 
      <button onClick={toggleMenu}>Toggle</button>
      {/* title="drinks" items={drinks} */}
    </>
  )
}

export default App;
