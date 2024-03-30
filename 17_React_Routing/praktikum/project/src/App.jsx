import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import DetailProduct from "./components/DetailProduct/DetailProduct";

function App() {

  return (
    <div> 
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/products" element={<Products/>}>
              <Route path="detail-product/:item.id" element={<DetailProduct/>}/>
            </Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contacts" element={<Contacts/>}></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  )
}

export default App;

