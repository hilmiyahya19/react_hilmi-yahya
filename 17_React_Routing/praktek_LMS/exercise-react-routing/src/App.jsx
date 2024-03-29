import { Link, Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <h1>contoh dasar</h1>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, illo dolorum rerum ullam quibusdam provident? Omnis numquam dolores quidem adipisci?</p> */}
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;

function Layout() {
  return(
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>beranda</Link>
          </li>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet/>
    </div>
  )
}

function Home() {
  return(
    <>
      <div>
        <h1>Home</h1>
      </div>
    </>
  )
}
function About() {
  return(
    <>
      <div>
        <h1>About</h1>
      </div>
    </>
  )
}