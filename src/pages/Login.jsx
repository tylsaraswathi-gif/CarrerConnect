import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (email === "" || password === "") {

      alert("Please enter email and password");

      return;
    }

    alert("Login Successful");

    navigate("/dashboard");
  };

  return (

    <div className="login-container">

      <form className="login-form" onSubmit={handleLogin}>

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

        <button
          type="button"
          onClick={()=>navigate(-1)}
        >
          Cancel
        </button>

      </form>

    </div>

  );
}

export default Login;