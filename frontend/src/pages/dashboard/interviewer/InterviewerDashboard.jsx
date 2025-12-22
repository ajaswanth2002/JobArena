import { useNavigate } from "react-router-dom";
import "./InterviewerDashboard.css";
import Navbar from "../../../components/Navbar.jsx";

export default function InterviewerDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="dash-container">
        <div className="dash-header">
          <h1>💼 Interviewer Dashboard</h1>
        </div>

        <p>Manage jobs and exams.</p>

        <div className="dash-cards">
          <div
            className="dash-card"
            onClick={() => navigate("/interviewer/post-job")}
          >
            <h3>Post Job</h3>
            <p>Create new job openings</p>
          </div>

          <div
            className="dash-card"
            onClick={() => navigate("/interviewer/create-exam")}
          >
            <h3>Create Exam</h3>
            <p>Setup online tests</p>
          </div>
        </div>
      </div>
    </>
  );
}