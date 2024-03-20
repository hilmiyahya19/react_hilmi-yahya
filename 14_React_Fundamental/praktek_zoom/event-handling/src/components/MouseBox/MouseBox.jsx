import StyledMouseBox from "./MouseBox.styled"

function MouseBox() {

    const handleMouseIn = () => {
        console.log('Mouse in');
      };
    
      const handleMouseOut = () => {
        console.log('Mouse out');
      };
    
  return (
    <div>
        <StyledMouseBox>
            <p onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
                Mouse Box
            </p>
        </StyledMouseBox>
    </div>
  )
}

export default MouseBox