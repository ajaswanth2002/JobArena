import Navbar from "../components/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <h1>
          Discover Jobs, Internships <br /> & Online Exams
        </h1>
        <p>
          One platform for students and recruiters to connect, hire and grow.
        </p>

        <div className="search-box">
          <input type="text" placeholder="Search jobs, skills, companies..." />
          <button>Search</button>
        </div>

        <div className="hero-tags">
          <span>Fresher Jobs</span>
          <span>Remote</span>
          <span>Internships</span>
          <span>Exams</span>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats">
        <div>
          <h2>12K+</h2>
          <p>Active Jobs</p>
        </div>
        <div>
          <h2>6K+</h2>
          <p>Companies</p>
        </div>
        <div>
          <h2>1L+</h2>
          <p>Students</p>
        </div>
        <div>
          <h2>800+</h2>
          <p>Online Tests</p>
        </div>
      </section>

      {/* FEATURED JOBS */}
      <section className="section">
        <h2>Featured Jobs</h2>

        <div className="card-grid">
          <JobCard title="Java Developer" company="TechNova" location="Hyderabad" />
          <JobCard title="Frontend Intern" company="PixelSoft" location="Remote" />
          <JobCard title="Data Analyst" company="DataAlpha" location="Bangalore" />
        </div>
      </section>

      {/* EXAMS SECTION */}
      <section className="section light">
        <h2>Upcoming Online Exams</h2>

        <div className="card-grid">
          <ExamCard title="Java Assessment" duration="60 mins" />
          <ExamCard title="DSA Challenge" duration="90 mins" />
          <ExamCard title="Aptitude Test" duration="45 mins" />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <h2>Why JobArena?</h2>

        <div className="features">
          <Feature text="Verified recruiters & companies" />
          <Feature text="Skill-based hiring & exams" />
          <Feature text="Simple & secure platform" />
          <Feature text="Fresher-friendly opportunities" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 JobArena. All rights reserved.</p>
      </footer>
    </div>
  );
}

/* --------- SMALL COMPONENTS --------- */

function JobCard({ title, company, location }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="company">{company}</p>
      <p className="location">{location}</p>
      <button>View</button>
    </div>
  );
}

function ExamCard({ title, duration }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{duration}</p>
      <button>Start Test</button>
    </div>
  );
}

function Feature({ text }) {
  return <div className="feature">{text}</div>;
}