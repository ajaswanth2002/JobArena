import { useNavigate } from "react-router-dom";
import "./StudentDashboard.css";
import Navbar from "../../../components/Navbar";

export default function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="dash-container">
        <div className="dash-header">
          <h1>🎓 Student Dashboard</h1>
        </div>

        <p>Welcome! Explore jobs and exams.</p>

        <div className="dash-cards">
          <div className="dash-card" onClick={() => navigate("/student/jobs")}>
            <h3>Jobs</h3>
            <p>View & apply for jobs</p>
          </div>

          <div className="dash-card" onClick={() => navigate("/student/exams")}>
            <h3>Exams</h3>
            <p>Attempt online exams</p>
          </div>
        </div>
      </div>
    </>
  );
}