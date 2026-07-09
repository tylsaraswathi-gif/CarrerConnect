import "./Navbar.css";

function Navbar({ setPage }) {
  return (
    <div className="sidebar">
      <h2>CareerConnect</h2>

      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("dashboard")}>Dashboard</button>
      <button onClick={() => setPage("jobs")}>Jobs</button>
      <button onClick={() => setPage("resume")}>Resume</button>
      <button onClick={() => setPage("login")}>Login</button>
      <button onClick={() => setPage("register")}>Register</button>
    </div>
  );
}

export default Navbar;