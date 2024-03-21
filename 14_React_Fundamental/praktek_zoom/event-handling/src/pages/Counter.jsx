import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prevCount => prevCount + 2);
    };

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={handleClick}>Tambah</button>
        </div>
    );
}

export default Counter;
