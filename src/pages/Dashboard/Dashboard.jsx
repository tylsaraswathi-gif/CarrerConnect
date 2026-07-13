import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1>CareerConnect Dashboard</h1>
      <p>Welcome back, Student 👋</p>

      {/* Statistics Cards */}
      <div className="stats-container">

        <div className="card">
          <h3>25</h3>
          <p>Companies</p>
        </div>

        <div className="card">
          <h3>8</h3>
          <p>Applied</p>
        </div>

        <div className="card">
          <h3>2</h3>
          <p>Interviews</p>
        </div>

        <div className="card">
          <h3>1</h3>
          <p>Offers</p>
        </div>

      </div>

      {/* Placement Drives */}
      <div className="section">
        <h2>Latest Placement Drives</h2>

        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Role</th>
              <th>Package</th>
              <th>Date</th>
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
              <td>ASE</td>
              <td>4.5 LPA</td>
              <td>25 Jul</td>
            </tr>
          </tbody>

        </table>
      </div>

      {/* Student Profile */}
      <div className="section">
        <h2>Student Profile</h2>

        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Branch:</strong> CSE</p>
        <p><strong>CGPA:</strong> 8.75</p>
        <p><strong>Email:</strong> john@gmail.com</p>
        <p><strong>Resume:</strong> Uploaded ✅</p>

      </div>

      {/* Notifications */}
      <div className="section">
        <h2>Notifications</h2>

        <ul>
          <li>TCS registration closes tomorrow.</li>
          <li>Infosys interview on 22 July.</li>
          <li>Update your resume before applying.</li>
        </ul>

      </div>

      {/* Quick Actions */}
      <div className="section">

        <h2>Quick Actions</h2>

        <div className="button-group">
          <button>Upload Resume</button>
          <button>Apply Now</button>
          <button>View Companies</button>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;