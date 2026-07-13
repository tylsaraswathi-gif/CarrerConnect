import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>CareerConnect</h2>

      <ul>

        <li>
          <Link to="/dashboard">🏠 Dashboard</Link>
        </li>

        <li>
          <Link to="/register">👨‍🎓 Register Student</Link>
        </li>

        <li>
          <Link to="/students">📋 Student List</Link>
        </li>

        <li>
          <Link to="/jobs">🏢 Companies</Link>
        </li>

        <li>
          <Link to="/aptitude-test">📝 Aptitude Test</Link>
        </li>

        <li>
          <Link to="/mock-interview">🎤 Mock Interview</Link>
        </li>

        <li>
          <Link to="/about">ℹ About</Link>
        </li>

        <li>
          <Link to="/login">🚪 Logout</Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;