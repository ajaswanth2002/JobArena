import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../components/Navbar";
import axios from "axios";
function Login() {
  const [showPass, setShowPass] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

function handleLogin(e) {
  e.preventDefault();

  // if (email === "s124" && password === "123@") {
  //   localStorage.setItem("role", "student");
  //   window.dispatchEvent(new Event("roleChange"));
  //   navigate("/student-dashboard");
  // } 
  // else if (email === "i124" && password === "123@") {
  //   localStorage.setItem("role", "interviewer");
  //   window.dispatchEvent(new Event("roleChange"));
  //   navigate("/interviewer-dashboard");
  // } 
  // else {
  //   alert("Invalid credentials");
  // }

 axios.post("http://localhost:8080/api/auth/login", {
  username,
  password
})
.then(res => {
  const role = res.data.role.toLowerCase(); // ✅ FIXED

  localStorage.setItem("role", role);
  window.dispatchEvent(new Event("roleChange"));

  if (role === "student") {
    navigate("/student-dashboard");
  } else if (role === "interviewer") {
    navigate("/interviewer-dashboard");
  }
})
.catch(() => {
  alert("Invalid credentials");
});}

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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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