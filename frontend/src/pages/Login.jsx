import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../components/Navbar";
function Login() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

function handleLogin(e) {
  e.preventDefault();

  if (email === "s124" && password === "123@") {
    localStorage.setItem("role", "student");
    window.dispatchEvent(new Event("roleChange"));
    navigate("/student-dashboard");
  } 
  else if (email === "i124" && password === "123@") {
    localStorage.setItem("role", "interviewer");
    window.dispatchEvent(new Event("roleChange"));
    navigate("/interviewer-dashboard");
  } 
  else {
    alert("Invalid credentials");
  }
}

  return (
    <>
    <Navbar />
    <div className="login-body">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            className="login-input"
            placeholder="Username"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-container">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter Password"
              required
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="toggle-btn"
            >
              {showPass ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
            </button>
          </div>

          <button className="login-btn">Login</button>
        </form>

        <div className="login-links">
          <span className="login-link">Forgot Password?</span>
          <span
            className="login-link"
            onClick={() => navigate("/register")}
          >
            New user? Register
          </span>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;