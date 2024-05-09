import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <h1>Welcome to Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard (harus login untuk bisa masuk)</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Home;