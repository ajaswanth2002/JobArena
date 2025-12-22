import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../components/Navbar";

function RegisterStep1() {
  const navigate = useNavigate();
  const [emailVerified, setEmailVerified] = useState(false);
  const [verifying, setVerifying] = useState(false);
  // ✅ Load from sessionStorage if exists
  const [data, setData] = useState(() => {
    const saved = sessionStorage.getItem("registerStep1");
    return saved
      ? JSON.parse(saved)
      : { username: "", email: "", password: "", confirm: "" };
  });

  const [showPass, setShowPass] = useState(false);

  function next(e) {
  e.preventDefault();

  if (!emailVerified) {
    alert("Please verify your email first");
    return;
  }

  if (data.password !== data.confirm) {
    alert("Passwords do not match");
    return;
  }

  sessionStorage.setItem("registerStep1", JSON.stringify(data));
  navigate("/register/step2");
}

  return (
    <>
      <Navbar />
      <div className="register-body">
        <div className="register-card">
          <h2 className="register-title">Register – Step 1</h2>

          <form className="register-form" onSubmit={next}>
            <input
              className="register-input"
              placeholder="Username"
              required
              value={data.username}
              onChange={(e) =>
                setData({ ...data, username: e.target.value })
              }
            />
            {/* EMAIL + VERIFY */}
            <div className="email-verify-container">
              <input
                type="email"
                className="register-input"
                placeholder="Email"
                required
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                  setEmailVerified(false); // reset if email changes
                }}
              />

              <button
                type="button"
                className={`verify-btn ${emailVerified ? "verified" : ""}`}
                disabled={!data.email || verifying}
                onClick={() => {
                  setVerifying(true);

                  // ✅ TEMP EMAIL VERIFY (FAKE)
                  setTimeout(() => {
                    setEmailVerified(true);
                    setVerifying(false);
                    alert("Email verified successfully!");
                  }, 1000);
                }}
              >
                {verifying
                  ? "Verifying..."
                  : emailVerified
                    ? "Verified ✓"
                    : "Verify"}
              </button>
            </div>

            {/* PASSWORD */}
            <div className="password-container">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                required
                className="register-input"
                value={data.password}
                onChange={(e) =>
                  setData({ ...data, password: e.target.value })
                }
              />
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
              </button>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="password-container">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Confirm Password"
                required
                className="register-input"
                value={data.confirm}
                onChange={(e) =>
                  setData({ ...data, confirm: e.target.value })
                }
              />
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
              </button>
            </div>

            <div className="register-actions">
              <button
                type="button"
                className="register-btn secondary"
                onClick={() => navigate("/")}
              >
                Back
              </button>

              <button className="register-btn">Next</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterStep1;