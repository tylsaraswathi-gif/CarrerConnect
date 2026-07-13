import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StudentTable() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const savedStudents =
      JSON.parse(localStorage.getItem("students")) || [];
    setStudents(savedStudents);
  }, []);

  const deleteStudent = (id) => {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);
    localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    );
  };

  return (
    <div className="student-table-container">
      <h2>Registered Students</h2>

      {students.length === 0 ? (
        <h3>No students registered yet.</h3>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Branch</th>
              <th>CGPA</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.branch}</td>
                <td>{student.cgpa}</td>

                <td>
                  <Link to={`/student/${student.id}`}>
                    <button>View</button>
                  </Link>

                  <button
                    onClick={() => deleteStudent(student.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentTable;