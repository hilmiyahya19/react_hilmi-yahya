import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; 
// import App from './App.jsx'
import './index.css';
import ArrayForm from './pages/ArrayForm.jsx';
import LoginForm from './pages/LoginForm.jsx';
import ToggleButton from './pages/ToggleButton.jsx';
import Counter from './pages/Counter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
        {/* <App /> */}
        <LoginForm/>
        <ArrayForm/>
        <ToggleButton/>
        <Counter/>
      </BrowserRouter>
  </React.StrictMode>,
)
