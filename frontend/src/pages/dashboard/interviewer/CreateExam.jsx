import { useState } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar.jsx";
import "./CreateExam.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function CreateExam() {
    const [title, setTitle] = useState("");
    const [examDate, setExamDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [durationMinutes, setDurationMinutes] = useState("");
    const [totalMarks, setTotalMarks] = useState("");
    const availableRoles = ["Software Devloper","Associate Trainee","Java Developer Intern","Full Stack Developer","Backend Developer","Frontend Developer","Python Developer","Software Engineer Intern",
        "Machine Learning Intern","Data Analyst Intern","DevOps Engineer Intern","React Developer Intern"];
    const [roleSearch, setRoleSearch] = useState("");
    const filteredRoles = availableRoles.filter(r => r.toLowerCase().includes(roleSearch.toLowerCase()));
    function handleCustomRole(e) {
        if (e.key === "Enter" && roleSearch.trim() !== "") {
            setRole(roleSearch);
            setRoleSearch("");
        }}
    const availableTopics = ["Java Programming","Python Programming","Core Java", "Advanced Java", "Spring Boot", "Hibernate", "JPA","Java Collections", "Multithreading", "Design Patterns", "DSA","Algorithms", 
        "Data Structures", "SQL", "MySQL", "PostgreSQL","MongoDB", "Python Basics", "Python OOP", "Django", "Flask","C Programming", "C++", "OOP Fundamentals", "HTML", "CSS",
        "JavaScript", "React", "Node.js", "REST API", "Microservices","Cloud Basics", "Git & GitHub"];
    const [topics, setTopics] = useState([]);
    const [role, setRole] = useState("");
    const [search, setSearch] = useState("");   // << IMPORTANT FIX
    const filteredTopics = availableTopics.filter((t) =>
        t.toLowerCase().includes(search.toLowerCase()));
    function toggleTopic(topic) {
        if (topics.includes(topic)) setTopics(topics.filter((t) => t !== topic));
        else setTopics([...topics, topic]);
    }
    function removeTopic(topic) {
        setTopics(topics.filter((t) => t !== topic));
    }
    function handleCustomTopic(e) {
        if (e.key === "Enter" && search.trim() !== "") {
            if (!topics.includes(search)) setTopics([...topics, search]);
            setSearch("");
        }}
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     setLoading(true);
    //     try {
    //     const payload = {title,topics,role,examDate,startTime,durationMinutes: 
    //     Number(durationMinutes),totalMarks: Number(totalMarks),createdByEmail: user.email};
    //         // const res = await axios.post(`${BASE_URL}/api/exams`, payload);

    //         if (res.data.status === "success") {
    //             toast.success("Exam created successfully!");
    //             setTimeout(() => navigate("/interviewer/tests"), 1000);
    //         } else toast.error(res.data.message || "Failed to create exam");
    //     } catch (err) {
    //         console.error(err);
    //         toast.error("Server Error");
    //     } finally {setLoading(false);}
    // }
//     async function handleSubmit(e) {
//   e.preventDefault();
//   setLoading(true);

//   try {
//     const payload = {
//       title,
//       topics,
//       role,
//       examDate,
//       startTime,
//       durationMinutes: Number(durationMinutes),
//       totalMarks: Number(totalMarks),
//     };

//     console.log("Exam payload:", payload);

//     // ✅ TEMP SUCCESS (NO BACKEND)
//     toast.success("Exam created successfully!");

//     setTimeout(() => {
//       navigate("/interviewer/tests");
//     }, 1000);

//   } catch (err) {
//     console.error(err);
//     toast.error("Something went wrong");
//   } finally {
//     setLoading(false);
//   }
// }
async function handleSubmit(e) {
  e.preventDefault();
  setLoading(true);

  try {
    const payload = {
      title,
      role,
      topics: topics.join(","), // backend expects string
      examDate,
      startTime,
      durationMinutes: Number(durationMinutes),
      totalMarks: Number(totalMarks),
      createdBy: localStorage.getItem("username")
    };

    await axios.post("http://localhost:8080/api/exams", payload);

    toast.success("Exam created successfully!");

    setTimeout(() => {
      navigate("/interviewer-dashboard");
    }, 1000);

  } catch (err) {
    console.error(err);
    toast.error("Server error");
  } finally {
    setLoading(false);
  }
}
    return (
        <>
        <Navbar />
        <div className="create-exam-page">
            <div className="create-exam-card">
                <h1>Create New Test</h1>
                <p className="subtitle">Set topics, role and schedule for this hiring test</p>
                <form onSubmit={handleSubmit} className="create-exam-form">
                    <div className="form-group">
                        <label>Test Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Java Screening Test" required />
                    </div>
                    <div className="form-group">
                        <label>Topics (select multiple)</label>
                        <div className="selected-topic-chips">
                            {topics.map((t) => (
                                <span key={t} className="chip">{t}<button type="button" className="chip-close" 
                                onClick={() => removeTopic(t)}>×</button></span>
                            ))}
                        </div>
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleCustomTopic} 
                        placeholder="Search or type and press Enter to add" className="topic-search-input"/>
                        {search && (
                            <div className="topics-dropdown">
                                {filteredTopics.map((topic) => (
                                    <div key={topic} className={`topic-option ${topics.includes(topic) ? "selected" : ""}`} 
                                    onClick={() => toggleTopic(topic)}>{topic}
                                    </div>
                                ))}
                                {filteredTopics.length === 0 && (
                                    <div className="topic-option" onClick={() => handleCustomTopic({ key: "Enter" })}>
                                        Add “{search}”
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="form-group">
                        <label>Role *</label>
                        {role && (
                            <span className="chip">
                                {role}
                                <button type="button" className="chip-close" onClick={() => setRole("")}>×</button>
                            </span>
                        )}
                        {!role && (
                            <input type="text" value={roleSearch} onChange={(e) => setRoleSearch(e.target.value)} 
                            onKeyDown={handleCustomRole} placeholder="Search or type and press Enter" className="topic-search-input"/>
                        )}
                        {roleSearch && !role && (
                            <div className="topics-dropdown">
                                {filteredRoles.map((r) => (
                                <div  key={r}  className="topic-option"  onClick={() => {setRole(r);setRoleSearch("");}}>{r}</div>
                                ))}
                                {filteredRoles.length === 0 && (
                                    <div className="topic-option" onClick={() => handleCustomRole({ key: "Enter" })}>Add “{roleSearch}”</div>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Exam Date</label>
                            <input type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label>Start Time</label>
                            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Duration (minutes)</label>
                            <input type="number" min="1" value={durationMinutes} onChange={(e) => setDurationMinutes(e.target.value)} placeholder="60" required />
                        </div>
                        <div className="form-group">
                            <label>Total Marks</label>
                            <input type="number" min="1" value={totalMarks} onChange={(e) => setTotalMarks(e.target.value)} placeholder="100" required />
                        </div>
                    </div>
                    <button className="primary-btn" type="submit" disabled={loading}>
                        {loading ? "Creating..." : "Create Test"}
                    </button>
                    <button type="button" className="secondary-btn" onClick={() => navigate("/interviewer/tests")}>
                        Back to Tests
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
        </>
    );
}