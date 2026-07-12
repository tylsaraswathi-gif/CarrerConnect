import { useNavigate } from "react-router-dom";

function StudentTable() {
  const navigate = useNavigate();

  const students = [
    {
      id: 1,
      name: "Yamini",
      branch: "CSE-DS",
      cgpa: 9.0,
    },
    {
      id: 2,
      name: "Rahul",
      branch: "CSE",
      cgpa: 8.8,
    },
    {
      id: 3,
      name: "Sneha",
      branch: "ECE",
      cgpa: 8.9,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Details</h1>

      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Branch</th>
            <th>CGPA</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>{student.cgpa}</td>

              <td>
                <button
                  onClick={() =>
                    navigate(`/student/${student.id}`)
                  }
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;