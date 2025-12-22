import Navbar from "../../../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./StudentDashboard.css";

export default function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="dash-container">
        <h1>🎓 Student Dashboard</h1>
        <p>Explore jobs and exams created by interviewers</p>

        <div className="dash-cards">
          <div className="dash-card" onClick={() => navigate("/student/jobs")}>
            <h3>Jobs</h3>
            <p>View & apply for available jobs</p>
          </div>

          <div className="dash-card" onClick={() => navigate("/student/exams")}>
            <h3>Exams</h3>
            <p>Attempt hiring exams</p>
          </div>
        </div>
      </div>
    </>
  );
}