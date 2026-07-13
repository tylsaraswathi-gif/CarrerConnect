import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const students = JSON.parse(localStorage.getItem("students")) || [];

    const user = students.find(
      (student) =>
        student.email === formData.email &&
        student.password === formData.password
    );

    if (user) {
      alert("Login Successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <h1>Placement Management System</h1>
        <h2>Student Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            /><br/><br/>

            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hidepassword" : "Showpassword"}
            </button>
          </div>

          <button type="submit">Login</button>

        </form>

        <p>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;