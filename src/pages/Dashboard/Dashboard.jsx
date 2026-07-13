import "./Dashboard.css";
import Clock from "../../components/Clock/Clock";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>Placement Management System</h1>
          <p>Welcome back, Placement Officer 👋</p>
        </div>

        <Clock />
      </div>

      {/* Statistics Cards */}
      <div className="stats-container">

        <div className="card">
          <h3>250</h3>
          <p>Total Students</p>
        </div>

        <div className="card">
          <h3>25</h3>
          <p>Companies</p>
        </div>

        <div className="card">
          <h3>8</h3>
          <p>Placement Drives</p>
        </div>

        <div className="card">
          <h3>52</h3>
          <p>Selected Students</p>
        </div>

      </div>

      {/* Placement Drives */}
      <div className="section">
        <h2>Upcoming Placement Drives</h2>

        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Role</th>
              <th>Package</th>
              <th>Drive Date</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>TCS</td>
              <td>Software Engineer</td>
              <td>3.6 LPA</td>
              <td>20 Jul</td>
            </tr>

            <tr>
              <td>Infosys</td>
              <td>System Engineer</td>
              <td>4 LPA</td>
              <td>23 Jul</td>
            </tr>

            <tr>
              <td>Accenture</td>
              <td>Associate Software Engineer</td>
              <td>4.5 LPA</td>
              <td>25 Jul</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Recent Registered Students */}
      <div className="section">
        <h2>Recently Registered Students</h2>

        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Branch:</strong> CSE</p>
        <p><strong>CGPA:</strong> 8.75</p>
        <p><strong>Email:</strong> john@gmail.com</p>
        <p><strong>Status:</strong> Eligible ✅</p>
      </div>

      {/* Notifications */}
      <div className="section">
        <h2>Notifications</h2>

        <ul>
          <li>TCS registration closes tomorrow.</li>
          <li>Infosys online assessment on 22 July.</li>
          <li>Accenture eligibility list has been published.</li>
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="section">
        <h2>Quick Actions</h2>

        <div className="button-group">
          <button>Add Student</button>
          <button>Add Company</button>
          <button>Create Drive</button>
          <button>View Reports</button>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;