import { useState } from "react"
import axios from "../../utils/apiRequest"
import { useNavigate } from "react-router-dom"
import {useAuth} from "../../context/AuthContext"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {setToken, setIsAuthenticated} = useAuth();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try{
      const response = await axios.post("/login", { username, password });
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      setIsAuthenticated(true);
      navigate("/dashboard");
    } catch(error){
      console.log(error);
      setErrorMessage("Invalid username or password. Please try again")
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username :</label>
        <input 
          type="text" 
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          />
        <div>
          <label htmlFor="password">Password :</label>
          <input 
            type={showPassword ? "text" : "password"} 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
          <input 
            type="checkbox" 
            checked={showPassword}
            onChange={toggleShowPassword}
            />
            Show Password
        </div> 
        {errorMessage && <div>{errorMessage}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Login;