import "./layout.scss";

import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";

import Navbar from "@/components/navbar/Navbar";

const LayoutComponent = () => (
  <div className="layout">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="content">
      <Outlet />
    </div>
  </div>
);

function Layout() {
  return <LayoutComponent />;
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  return !currentUser ? <Navigate to="/login" /> : <LayoutComponent />;
}

export { Layout, RequireAuth };
