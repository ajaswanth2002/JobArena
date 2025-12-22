import { useEffect, useState } from "react";
import HomeNav from "./navbar/HomeNav";
import StudentNav from "./navbar/StudentNav";
import InterviewerNav from "./navbar/InterviewerNav";
import "./Navbar.css";

export default function Navbar() {
  const [role, setRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    const updateRole = () => {
      setRole(localStorage.getItem("role"));
    };

    // listen to custom event
    window.addEventListener("roleChange", updateRole);

    return () => {
      window.removeEventListener("roleChange", updateRole);
    };
  }, []);

  if (role === "student") return <StudentNav />;
  if (role === "interviewer") return <InterviewerNav />;

  return <HomeNav />;
}