import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterStep1 from "./pages/RegisterStep1";
import RegisterStep2 from "./pages/RegisterStep2";

import StudentDashboard from "./pages/dashboard/student/StudentDashboard";
import StudentJobs from "./pages/dashboard/student/StudentJobs";
import StudentExams from "./pages/dashboard/student/StudentExams";

import InterviewerDashboard from "./pages/dashboard/interviewer/InterviewerDashboard";
import PostJob from "./pages/dashboard/interviewer/PostJob";
import CreateExam from "./pages/dashboard/interviewer/CreateExam";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterStep1 />} />
          <Route path="/register/step2" element={<RegisterStep2 />} />

          {/* Student */}
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/student/jobs" element={<StudentJobs />} />
          <Route path="/student/exams" element={<StudentExams />} />

          {/* Interviewer */}
          <Route path="/interviewer-dashboard" element={<InterviewerDashboard />} />
          <Route path="/interviewer/post-job" element={<PostJob />} />
          <Route path="/interviewer/create-exam" element={<CreateExam />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;