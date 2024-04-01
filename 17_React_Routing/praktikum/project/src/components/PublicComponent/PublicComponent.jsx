import { Outlet } from "react-router-dom";

export default function PublicComponent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}