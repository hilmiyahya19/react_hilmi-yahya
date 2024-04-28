import {  Navigate, Outlet } from "react-router-dom";
// import useLocalStorage from "react-use-localstorage";

export default function PublicComponent() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (isAuthenticated === "true") {
    return <Navigate to="/home" />;
  }

  return <Outlet />; // Render nested routes
}