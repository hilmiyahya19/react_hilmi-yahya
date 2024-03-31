import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
// import Products from "./pages/Products";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import DetailProduct from "./components/DetailProduct/DetailProduct";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import { useState } from "react";
import productData from "./components/CreateProduct/productData";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [data, setData] = useState([]);

  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log('Login successful');
    setLoggedIn(true); // Setelah login berhasil, ubah state isLoggedIn menjadi true
  };

  return (
    <div> 
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            {/* Route untuk Login */}
            {!isLoggedIn && <Route path="/" element={<Login onLogin={handleLogin} />} />}
            {/* Route untuk Home dan rute yang memerlukan login */}
            {isLoggedIn && (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<CreateProduct data={data} setData={setData} />} />
                <Route path="/products/detail-product/:id" element={<DetailProduct 
                productData={productData} data={data} setData={setData}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
              </>
            )}
            {/* Route untuk NotFound */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  )
}

export default App;




