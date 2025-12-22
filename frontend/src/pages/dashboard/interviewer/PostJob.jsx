import Navbar from "../../../components/Navbar.jsx";
export default function PostJob() {
  return (
    <div style={{ padding: "30px" }}>
      <Navbar />
      <h2>Post a Job</h2>
      <input placeholder="Job Title" /><br /><br />
      <input placeholder="Location" /><br /><br />
      <button>Post Job</button>
    </div>
  );
}