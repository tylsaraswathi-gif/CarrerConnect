import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./StudentTable.css";

function StudentTable() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const savedStudents =
      JSON.parse(localStorage.getItem("students")) || [];
    setStudents(savedStudents);
  }, []);

  return (
    <div className="student-table-container">
      <h1>Student Details</h1>

      <table className="student-table">
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
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.branch}</td>
                <td>{student.cgpa}</td>
                <td>
                  <Link to={`/student/${student.id}`}>
                    <button className="view-btn">View</button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No students registered.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;