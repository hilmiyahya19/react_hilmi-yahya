import { Navigate, Route, Routes } from "react-router-dom";
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
import PublicComponent from "./components/PublicComponent/PublicComponent";
import PrivateComponent from "./components/PrivateComponent/privateComponent";
import Logout from "./components/Logout/Logout";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const [data, setData] = useState([]);
  
  return (
    <div> 
      <ThemeProvider theme={theme}>
        <Layout>
        <Routes>
          {/* private untuk super admin */}
          <Route path="/" element={<PrivateComponent />}>
              <Route path="/home" element={<Home/>} />
              <Route path="/products" element={<CreateProduct data={data} setData={setData} />} />
              <Route path="/products/detail-product/:id" element={<DetailProduct 
                productData={productData} data={data} setData={setData}/>} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/logout" element={<Logout/>} />
            </Route>
          {/* public untuk semua orang */}
            <Route path="/" element={<PublicComponent />}>
               {/* mengarahkan pengguna ke halaman "welcome" ketika mereka membuka aplikasi */}
              <Route index element={<Navigate to="/welcome" replace />} /> 
              <Route path="/welcome" element={<Welcome/>}/>
              <Route path="/login" element={<Login />} />
            </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  )
}

export default App;




