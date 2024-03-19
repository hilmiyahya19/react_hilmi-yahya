import StyledHeader from "./Header.styled"

function Header({text}) {
    return (
        <>
            <StyledHeader>
            <h1>{text}</h1>
            </StyledHeader>
        </>
    )
}

export default Header