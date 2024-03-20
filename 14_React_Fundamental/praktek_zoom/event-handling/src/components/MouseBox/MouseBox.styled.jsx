import styled from "styled-components";

const StyledMouseBox = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: 20px;
    width: 95px;
    height: 20px;
    background-color: #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    &:hover {
    background-color: lightblue; /* Warna latar belakang saat dihover */
    cursor: pointer;
    }
`
export default StyledMouseBox;