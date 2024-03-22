import { useState, useEffect } from 'react';
import StyledUseEffectComponent from './UseEffectComponent.styled';

export default function UseEffectComponent() {
    let name = "swipe";

    // useEffect yang selalu berjalan
    useEffect(() => {
    console.log('Efek selalu berjalan');

    // Memeriksa apakah nilai variabel name adalah "swiper"
    if (name === "swiper") {
      alert("Swiper jangan mencuri!");
      console.log("Swiper jangan mencuri!");
    }
    });

    const [inputValue, setInputValue] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    useEffect(() => {
        if (inputValue.length > 5) {
          setShowErrorMessage(true);
        } else {
          setShowErrorMessage(false);
        }
      }, [inputValue]);

    const [count, setCount] = useState(0);
    useEffect(() => {
    console.log('Count berubah:', count);
    }, [count]); 

  return (
    <>
        <StyledUseEffectComponent>
            <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            />
            {showErrorMessage && (
            <small>Input tidak boleh lebih dari 5 karakter</small>
            )}
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Tambah</button>
            <button onClick={() => setCount(count - 1)}>Kurangi</button>
        </StyledUseEffectComponent>
    </>
  );
}
