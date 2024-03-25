import Container from "../components/Container/Container";
import Navbar from "../components/Navbar/Navbar";

function Layout(props) {
    return (
        <div>
            <Navbar/>
            <main>
                <Container>
                    {props.children}
               </Container>
            </main>
        </div>
    )
}

export default Layout;