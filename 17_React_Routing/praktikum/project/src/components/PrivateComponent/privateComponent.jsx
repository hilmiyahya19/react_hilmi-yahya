import {  Navigate, Outlet } from "react-router-dom";
// import useLocalStorage from "react-use-localstorage";

export default function PrivateComponent() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (isAuthenticated == "false") {
    return <Navigate to="/login" />;
  }

  return <Outlet />; // Render nested routes
}