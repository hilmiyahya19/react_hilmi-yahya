import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";

function App() {

  return (
    <div> 
      <Layout>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contacts" element={<Contacts/>}></Route>
        </Routes>
      </Layout>
    </div>
  )
}

export default App;

