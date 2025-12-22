import { Link, useNavigate } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export default function StudentNav() {
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
        <Link to="/student-dashboard">JobArena</Link>
      </div>

      <div className="nav-links">
        <Link to="/student/jobs">Jobs</Link>
        <Link to="/student/exams">Exams</Link>
        <Link to="/student-dashboard">Dashboard</Link>
        <span onClick={logout} className="nav-link logout">Logout</span>
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
}