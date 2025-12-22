import { Link, useNavigate } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export default function InterviewerNav() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("role");
    window.dispatchEvent(new Event("roleChange"));
    navigate("/");
  }

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="nav-logo">
        <Link to="/interviewer-dashboard">JobArena</Link>
      </div>

      {/* CENTER LINKS */}
      <div className="nav-links">
        <Link to="/interviewer-dashboard">Dashboard</Link>
        <Link to="/interviewer/post-job">Post Job</Link>
        <Link to="/interviewer/create-exam">Create Exam</Link>
      </div>

      {/* RIGHT ACTIONS */}
      <div className="nav-actions">
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

        <button onClick={logout} className="logout">
          Logout
        </button>
      </div>
    </nav>
  );
}