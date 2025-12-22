import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Register.css";
import Navbar from "../components/Navbar";

function RegisterStep2() {
  const navigate = useNavigate();

  // ✅ Load step-1 data safely
  const savedData = sessionStorage.getItem("registerStep1");
  const state = savedData ? JSON.parse(savedData) : null;

  const [name, setName] = useState("");
  const [college, setCollege] = useState("");

  if (!state) {
    navigate("/register");
    return null;
  }

  function submit(e) {
    e.preventDefault();

    const finalData = {
      username: state.username,
      email: state.email,
      password: state.password,
      name,
      college,
    };

    console.log("Final Register Data:", finalData);

    // 🔴 BACKEND WILL COME LATER
    // fetch("http://localhost:8080/api/register", {...})

    alert("Registration successful!");

    // ✅ Clear stored data after success
    sessionStorage.removeItem("registerStep1");
    navigate("/login");
  }

  return (
    <>
     <Navbar />
      <div className="register-body">
        <div className="register-card">
          <h2 className="register-title">Register – Step 2</h2>

          <form className="register-form" onSubmit={submit}>
            <input
              className="register-input"
              value={state.username}
              readOnly
            />

            <input
              className="register-input"
              value={state.email}
              readOnly
            />

            <input
              className="register-input"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="register-input"
              placeholder="College"
              required
              value={college}
              onChange={(e) => setCollege(e.target.value)}
            />

            <input type="file" className="register-input" />

            <div className="register-actions">
              <button
                type="button"
                className="register-btn secondary"
                onClick={() => navigate("/register")}
              >
                Back
              </button>

              <button className="register-btn">Register</button>
            </div>
          </form>
        </div>
      </div>
      </>
  );
}

export default RegisterStep2;