import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Resume from "./pages/Resume";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <Navbar setPage={setPage} />

      <div className="content">
        {page === "home" && <Home />}
        {page === "login" && <Login />}
        {page === "register" && <Register />}
        {page === "dashboard" && <Dashboard />}
        {page === "jobs" && <Jobs />}
        {page === "resume" && <Resume />}
      </div>
    </div>
  );
}

export default App;