import Navbar from "../../../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./InterviewerDashboard.css";

export default function InterviewerDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="dash-container">
        <h1>💼 Interviewer Dashboard</h1>
        <p>Create jobs and exams for candidates</p>

        <div className="dash-cards">
          <div
            className="dash-card"
            onClick={() => navigate("/interviewer/post-job")}
          >
            <h3>Create Job</h3>
            <p>Post a new job opening</p>
          </div>

          <div
            className="dash-card"
            onClick={() => navigate("/interviewer/create-exam")}
          >
            <h3>Create Exam</h3>
            <p>Setup hiring test</p>
          </div>
        </div>
      </div>
    </>
  );
}