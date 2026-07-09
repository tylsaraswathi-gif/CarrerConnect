import { useState } from "react";
import "./Register.css";

function Register() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
    dob: "",
    college: "",
    branch: "",
    graduationYear: "",
    cgpa: "",
    skills: "",
    terms: false,
  });

  const [resume, setResume] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setStudent({
      ...student,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Name Validation
    if (student.name.trim().length < 3) {
      alert("Name must contain at least 3 characters.");
      return;
    }

    // Email Validation
    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(student.email)) {
      alert("Enter a valid email address.");
      return;
    }

    // Password Validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordPattern.test(student.password)) {
      alert(
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character."
      );
      return;
    }

    // Confirm Password
    if (student.password !== student.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Phone Validation
    const phonePattern = /^[6-9]\d{9}$/;

    if (!phonePattern.test(student.phone)) {
      alert("Enter a valid 10-digit phone number.");
      return;
    }

    // Gender Validation
    if (student.gender === "") {
      alert("Please select Gender.");
      return;
    }

    // DOB Validation
    if (student.dob === "") {
      alert("Please select Date of Birth.");
      return;
    }

    // College Validation
    if (student.college.trim() === "") {
      alert("College name is required.");
      return;
    }

    // Branch Validation
    if (student.branch.trim() === "") {
      alert("Branch is required.");
      return;
    }

    // Graduation Year
    if (
      student.graduationYear < 2024 ||
      student.graduationYear > 2035
    ) {
      alert("Enter a valid Graduation Year.");
      return;
    }

    // CGPA Validation
    const cgpa = parseFloat(student.cgpa);

    if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
      alert("CGPA must be between 0 and 10.");
      return;
    }

    // Skills Validation
    if (student.skills.trim() === "") {
      alert("Please enter your skills.");
      return;
    }

    // Resume Validation
    if (!resume) {
      alert("Please upload your Resume.");
      return;
    }

    // Terms Validation
    if (!student.terms) {
      alert("Please accept Terms & Conditions.");
      return;
    }

    alert("Registration Successful!");

    console.log({
      ...student,
      resume: resume.name,
    });

    setSubmitted(true);
  }

  function handleReset() {
    setStudent({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      gender: "",
      dob: "",
      college: "",
      branch: "",
      graduationYear: "",
      cgpa: "",
      skills: "",
      terms: false,
    });

    setResume(null);
    setSubmitted(false);
  }

  return (
    <div className="register-page">
      <h1>CareerConnect</h1>
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={student.email}
          onChange={handleChange}
          required
        />

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={student.password}
          onChange={handleChange}
          required
        />

        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={student.confirmPassword}
          onChange={handleChange}
          required
        />

        <label className="show-password">
          <input
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Password
        </label>

        <input
          type="text"
          name="phone"
          placeholder="Mobile Number"
          value={student.phone}
          onChange={handleChange}
          maxLength="10"
          required
        />
                <div className="gender">
          <label>Gender:</label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={student.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={student.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={student.gender === "Other"}
              onChange={handleChange}
            />
            Other
          </label>
        </div>

        <input
          type="date"
          name="dob"
          value={student.dob}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="college"
          placeholder="College Name"
          value={student.college}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="branch"
          placeholder="Branch"
          value={student.branch}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="graduationYear"
          placeholder="Graduation Year"
          value={student.graduationYear}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="cgpa"
          placeholder="CGPA"
          value={student.cgpa}
          onChange={handleChange}
          step="0.01"
          min="0"
          max="10"
          required
        />

        <textarea
          name="skills"
          placeholder="Enter Your Skills"
          value={student.skills}
          onChange={handleChange}
          required
        ></textarea>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResume(e.target.files[0])}
          required
        />

        <label className="terms">
          <input
            type="checkbox"
            name="terms"
            checked={student.terms}
            onChange={handleChange}
          />
          I accept Terms & Conditions
        </label>

        <div className="buttons">
          <button type="submit">Register</button>

          <button
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>

      <hr />

      {submitted && (
        <>
          <h2>Student Details</h2>

          <p><strong>Name:</strong> {student.name}</p>

          <p><strong>Email:</strong> {student.email}</p>

          <p><strong>Phone:</strong> {student.phone}</p>

          <p><strong>Gender:</strong> {student.gender}</p>

          <p><strong>Date of Birth:</strong> {student.dob}</p>

          <p><strong>College:</strong> {student.college}</p>

          <p><strong>Branch:</strong> {student.branch}</p>

          <p><strong>Graduation Year:</strong> {student.graduationYear}</p>

          <p><strong>CGPA:</strong> {student.cgpa}</p>

          <p><strong>Skills:</strong> {student.skills}</p>

          <p>
            <strong>Resume:</strong>{" "}
            {resume ? resume.name : "Not Uploaded"}
          </p>
        </>
      )}
    </div>
  );
}

export default Register;