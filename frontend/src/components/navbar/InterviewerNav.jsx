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
      <div className="nav-logo">
        <Link to="/interviewer-dashboard">JobArena</Link>
      </div>

      <div className="nav-links">
        <Link to="/interviewer-dashboard">Dashboard</Link>
        <Link to="/interviewer/post-job">Post Job</Link>
        <Link to="/interviewer/create-exam">Create Exam</Link>
        <span onClick={logout} className="nav-link logout">Logout</span>
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
}