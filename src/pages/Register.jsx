import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    branch: "",
    cgpa: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const students = JSON.parse(localStorage.getItem("students")) || [];

    const newStudent = {
      id: students.length + 1,
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      branch: formData.branch,
      cgpa: formData.cgpa,
    };

    students.push(newStudent);

    localStorage.setItem("students", JSON.stringify(students));

    alert("Registration Successful!");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      branch: "",
      cgpa: "",
      password: "",
      confirmPassword: "",
    });

    navigate("/students");
  };

  return (
    <div className="register-container">
      <div className="register-box">

        <h1>CareerConnect</h1>
        <h2>Create Your Account</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          >
            <option value="">Select Branch</option>
            <option>CSE</option>
            <option>CSE-DS</option>
            <option>AI & ML</option>
            <option>ECE</option>
            <option>EEE</option>
          </select>

          <input
            type="number"
            name="cgpa"
            placeholder="CGPA"
            value={formData.cgpa}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">Register</button>

        </form>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;