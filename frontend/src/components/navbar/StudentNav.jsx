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
      {/* LEFT */}
      <div className="nav-logo">
        <Link to="/student-dashboard">JobArena</Link>
      </div>

      {/* CENTER */}
      <div className="nav-links">
        <Link to="/student-dashboard">Dashboard</Link>
        <Link to="/student/jobs">Jobs</Link>
        <Link to="/student/exams">Exams</Link>
      </div>

      {/* RIGHT */}
      <div className="nav-actions">
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}