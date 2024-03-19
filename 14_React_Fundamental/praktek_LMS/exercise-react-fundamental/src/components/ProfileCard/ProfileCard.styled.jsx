import styled from "styled-components";

const StyledProfileCard = styled.div`
    width: 200px;
    box-shadow: 10px 10px 5px 0px rgba(227,202,202,0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(227,202,202,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(227,202,202,0.75);
    margin: 10px 10px;
    display: inline-block;

    img {
        width: 100%;
        height: 200px;
    }

    section{
        padding: 5px 10px;
    }
`;

export default StyledProfileCard; 
