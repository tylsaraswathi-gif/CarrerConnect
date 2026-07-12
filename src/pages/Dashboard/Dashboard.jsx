import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1>Dashboard</h1>

      <p>Welcome to the CareerConnect Dashboard</p>

      <div className="dashboard-nav">

        <NavLink
          to="overview"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Overview
        </NavLink>

        <NavLink
          to="profile"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Profile
        </NavLink>

        <NavLink
          to="settings"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Settings
        </NavLink>

      </div>

      <div className="dashboard-content">
        <Outlet />
      </div>

    </div>
  );
}

export default Dashboard;