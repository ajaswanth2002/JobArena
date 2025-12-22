import { useState } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function PostJob() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/jobs", {
        title,
        company,
        location,
        description,
        createdBy: localStorage.getItem("username") // interviewer
      });

      alert("Job created successfully");
      navigate("/interviewer-dashboard");

    } catch (err) {
      console.error(err);
      alert("Failed to create job");
    }
  }

  return (
    <>
      <Navbar />
      <div className="form-container">
        <h2>Create Job</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Job Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            placeholder="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />

          <input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <textarea
            placeholder="Job Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button>Create Job</button>
        </form>
      </div>
    </>
  );
}