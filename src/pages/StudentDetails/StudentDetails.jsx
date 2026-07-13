import { useParams } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();

  const students = JSON.parse(localStorage.getItem("students")) || [];
  const student = students.find((s) => s.id === Number(id));

  if (!student) {
    return <h2>Student not found.</h2>;
  }

  return (
    <div>
      <h2>Student Details</h2>

      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Phone:</strong> {student.phone}</p>
      <p><strong>Branch:</strong> {student.branch}</p>
      <p><strong>CGPA:</strong> {student.cgpa}</p>
    </div>
  );
}

export default StudentDetails;