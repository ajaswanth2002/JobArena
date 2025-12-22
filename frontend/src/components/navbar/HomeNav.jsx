import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export default function HomeNav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">JobArena</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
}