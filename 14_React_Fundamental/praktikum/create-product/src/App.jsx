import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Faqs from "./pages/Faqs";
import Pricing from "./pages/Pricing";
import About from "./pages/About";

function App() {

  return (
    <div> 
      <Layout>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/features" element={<Features/>}></Route>
          <Route path="/pricing" element={<Pricing/>}></Route>
          <Route path="/faqs" element={<Faqs/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </Layout>
    </div>
  )
}

export default App;

