import Container from "../components/Container/Container";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Layout(props) {
    return (
        <div>
            <Navbar/>
            <main>
                <Container>
                    {props.children}
               </Container>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;