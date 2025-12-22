import Navbar from "../components/Navbar";
import "./Home.css";

import accenture from "../assets/accenture.png";
import amazon from "../assets/amazon.png";
import cognizant from "../assets/cognizant.png";
import deloitte from "../assets/deloitte.png";
import ibm from "../assets/ibm.png";
import tcs from "../assets/tata-consultancy-services.png";
import techm from "../assets/tech-mahindra.png";
import wipro from "../assets/wipro.png";
import zoho from "../assets/zoho.png";

export default function Home() {
  const jobs = [
    { title: "Java Developer", company: "Accenture", location: "Hyderabad", logo: accenture },
    { title: "Frontend Intern", company: "Amazon", location: "Remote", logo: amazon },
    { title: "Data Analyst", company: "Cognizant", location: "Bangalore", logo: cognizant },
    { title: "Backend Engineer", company: "Deloitte", location: "Pune", logo: deloitte },
    { title: "Cloud Engineer", company: "IBM", location: "Chennai", logo: ibm },
    { title: "Java Intern", company: "TCS", location: "Hyderabad", logo: tcs },
    { title: "Full Stack Dev", company: "Tech Mahindra", location: "Noida", logo: techm },
    { title: "Software Engineer", company: "Wipro", location: "Bangalore", logo: wipro },
    { title: "React Developer", company: "Zoho", location: "Chennai", logo: zoho },
  ];

  return (
    <div className="home">
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <h1>Discover Jobs & Internships</h1>
        <p>Top companies hiring freshers & interns</p>

        <div className="search-box">
          <input placeholder="Search jobs, companies..." />
          <button>Search</button>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div><h2>12K+</h2><p>Active Jobs</p></div>
        <div><h2>6K+</h2><p>Companies</p></div>
        <div><h2>1L+</h2><p>Students</p></div>
        <div><h2>800+</h2><p>Online Tests</p></div>
      </section>

      {/* JOBS */}
      <section className="section">
        <h2>Featured Jobs</h2>
        <div className="jobs-grid">
          {jobs.map((job, i) => (
            <div key={i} className="job-card">
              <img src={job.logo} alt={job.company} className="job-logo" />

              <div className="job-details">
                <h3>{job.title}</h3>
                <p className="company">{job.company}</p>
                <p className="location">{job.location}</p>
              </div>

              <button className="view-btn">View</button>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="section">
        <h2>Why JobArena?</h2>
        <div className="features">
          <div className="feature">Verified recruiters & companies</div>
          <div className="feature">Skill-based hiring</div>
          <div className="feature">Fresher-friendly jobs</div>
          <div className="feature">Secure & simple platform</div>
        </div>
      </section>

      <footer className="footer">
        © 2025 JobArena. All rights reserved.
      </footer>
    </div>
  );
}