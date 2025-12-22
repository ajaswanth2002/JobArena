import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import "./StudentExams.css";

export default function StudentExams() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/exams")
      .then(res => setExams(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="exams-page">
        <h2>Available Exams</h2>

        {exams.length === 0 ? (
          <p>No exams available currently.</p>
        ) : (
        <div className="exams-grid">
          {exams.map(exam => (
            <div key={exam.id} className="exam-card">
              <h3>{exam.title}</h3>
              <div className="exam-meta">
                <span><b>Role:</b> {exam.role}</span>
                <span><b>Date:</b> {exam.examDate}</span>
                <span><b>Time:</b> {exam.startTime}</span>
                <span><b>Duration:</b> {exam.durationMinutes} mins</span>
                <span><b>Marks:</b> {exam.totalMarks}</span>
              </div>

              {/* <p><b>Topics:</b> {exam.topics}</p> */}

              <button className="start-btn">Start Exam</button>
            </div>
          ))}
        </div>
        )}
      </div>
    </>
  );
}