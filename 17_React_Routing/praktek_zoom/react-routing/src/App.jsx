import { Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Login from './pages/Login';

// Home
function Home() {
  return <h1>Home Page</h1>;
}

// HeroSection
function HeroSection() {
  const { id } = useParams();
  return id ? <h1>Hero Section with ID: {id}</h1> : <h1>Hero Section without ID</h1>;
}

function App() {
  return (
    <Routes>
    <Route path="/" element={<Navigation />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/hero" element={<HeroSection />} />
      <Route path="/hero/:id" element={<HeroSection />} />
    </Route>
    </Routes>
  );
}

export default App;
