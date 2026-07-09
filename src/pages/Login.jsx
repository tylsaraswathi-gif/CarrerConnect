import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginDetails, setLoginDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    // Email Validation
    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
      alert("Enter a valid email");
      return;
    }

    // Password Validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setLoginDetails({
        email,
        password,
      });

      alert("Login Successful!");

      setEmail("");
      setPassword("");
      setShowPassword(false);
    }, 2000);
  }

  return (
    <div className="login-page">

      <h1>CareerConnect</h1>

      <h2>Student Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </button>

        <br />

        <button type="submit">
          Login
        </button>

      </form>

      <br />

      {loading && <h3>Logging in...</h3>}

      <hr />

      {loginDetails && (
        <div className="login-details">

          <h2>Login Details</h2>

          <p><strong>Email:</strong> {loginDetails.email}</p>

          <p><strong>Password:</strong> {loginDetails.password}</p>

        </div>
      )}

    </div>
  );
}

export default Login;