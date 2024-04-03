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
import PublicComponent from "./components/PublicComponent/PublicComponent";
import PrivateComponent from "./components/PrivateComponent/privateComponent";
import Logout from "./components/Logout/Logout";
import Welcome from "./components/Welcome/Welcome";

function App() {
  // isAuthenticated === true = <PrivateComponent/> 
  // isAuthenticated === false = <PublicComponent/> 

  const [data, setData] = useState([]);

  // At the start of your application, or before rendering the App component
  if (localStorage.getItem('isAuthenticated') === null) {
    localStorage.setItem('isAuthenticated', 'false');
  }
  
  return (
    <div> 
      <ThemeProvider theme={theme}>
        <Layout>
        <Routes>
          {/* Public routes */}
            <Route path="/" element={<PublicComponent />}>
              <Route path="/welcome" element={<Welcome/>}/>
              <Route path="/login" element={<Login />} />
            </Route> 
          {/* Private routes */}
            <Route path="/a" element={<PrivateComponent />}>
              <Route path="/home" element={<Home/>} />
              <Route path="/products" element={<CreateProduct data={data} setData={setData} />} />
              <Route path="/products/detail-product/:id" element={<DetailProduct 
                productData={productData} data={data} setData={setData}/>} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/logout" element={<Logout/>} />
            </Route>
          {/* Not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  )
}

export default App;




