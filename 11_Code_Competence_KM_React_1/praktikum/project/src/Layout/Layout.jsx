import Container from "../components/Container/Container";
import Navbar from "../components/Navbar/Navbar";
import FooterTemplate from "../components/Footer/FooterTemplate";

function Layout(props) {
    return (
        <div>
            <Navbar/>
            <main>
                <Container>
                    {props.children}
               </Container>
            </main>
            <FooterTemplate/>
        </div>
    )
}

export default Layout;