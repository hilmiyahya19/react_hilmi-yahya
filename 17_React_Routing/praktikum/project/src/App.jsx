import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
// import Products from "./pages/Products";
import Contacts from "./pages/Contacts";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import DetailProduct from "./components/DetailProduct/DetailProduct";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import { useState } from "react";
import productData from "./components/CreateProduct/productData";

function App() {
  const [data, setData] = useState([]);

  return (
    <div> 
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/products" element={<CreateProduct data={data} setData={setData}/>}></Route>
            <Route path="/products/detail-product/:id" element={<DetailProduct productData={productData}/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contacts" element={<Contacts/>}></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  )
}

export default App;

