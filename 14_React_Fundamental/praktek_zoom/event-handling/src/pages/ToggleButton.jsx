import { useState } from 'react';

function ToggleButton() {
    const [isButton, setIsButton] = useState(true);

    const handleClick = () => {
        setIsButton(!isButton);
    };

    return (
        <div>
            {isButton ? (
                <button onClick={handleClick}>Button</button>
            ) : (
                <button onClick={handleClick}>Tombol</button>
            )}
        </div>
    );
}

export default ToggleButton;
