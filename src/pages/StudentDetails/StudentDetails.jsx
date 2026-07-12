import { useParams, useNavigate } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample student data
  const students = [
    {
      id: 1,
      name: "Yamini",
      branch: "CSE-DS",
      cgpa: 9.0,
      email: "yamini@gmail.com",
    },
    {
      id: 2,
      name: "Rahul",
      branch: "CSE",
      cgpa: 8.8,
      email: "rahul@gmail.com",
    },
    {
      id: 3,
      name: "Sneha",
      branch: "ECE",
      cgpa: 8.9,
      email: "sneha@gmail.com",
    },
  ];

  const student = students.find((s) => s.id === Number(id));

  if (!student) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Student Not Found</h2>
        <button onClick={() => navigate("/students")}>
          Back to Students
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Details</h1>

      <table border="1" cellPadding="10">
        <tbody>
          <tr>
            <th>ID</th>
            <td>{student.id}</td>
          </tr>

          <tr>
            <th>Name</th>
            <td>{student.name}</td>
          </tr>

          <tr>
            <th>Branch</th>
            <td>{student.branch}</td>
          </tr>

          <tr>
            <th>CGPA</th>
            <td>{student.cgpa}</td>
          </tr>

          <tr>
            <th>Email</th>
            <td>{student.email}</td>
          </tr>
        </tbody>
      </table>

      <br />

      <button onClick={() => navigate("/students")}>
        Back to Students
      </button>
    </div>
  );
}

export default StudentDetails;