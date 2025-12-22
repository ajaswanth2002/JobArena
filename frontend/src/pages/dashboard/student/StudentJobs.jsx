import Navbar from "../../../components/Navbar";
import { useEffect, useState } from "react";
import "./StudentJobs.css";
import axios from "axios"; 
export default function StudentJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    axios.get("http://localhost:8080/api/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="jobs-page">
        <h2>Available Jobs</h2>

        {!loading && jobs.length === 0 && (
          <p>No jobs available right now.</p>
        )}
        {jobs.length === 0 ? (
          <p>No jobs available currently.</p>
        ) : (
        <div className="jobs-grid">
          {jobs.map(job => (
            <div key={job.id} className="job-card">
              <div>
              <h3>{job.title}</h3>
              <p><b>Company:</b> {job.company}</p>
              <p><b>Location:</b> {job.location}</p>
              <p>{job.description}</p>
              <button className="apply-btn">Apply</button>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </>
  );
}