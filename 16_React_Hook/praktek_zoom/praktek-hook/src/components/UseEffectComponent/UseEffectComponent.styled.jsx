import styled from "styled-components";

const StyledUseEffectComponent = styled.div`
    input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    margin-top: 10px;
    }

    input:focus {
    box-shadow: 0 0 5px 0 rgba(0, 123, 255, 0.5); 
    }

    small {
    color: red;
    }

    button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px; 
    cursor: pointer;
    margin-right: 10px;
    transition: background-color 0.3s ease;
    border-radius: 5px; 
    }

    button:hover {
    background-color: #0056b3;
    }
`
export default StyledUseEffectComponent;