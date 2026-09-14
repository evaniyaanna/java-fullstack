import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const students = ["Alexa", "Riya", "Arun", "Anu"];

  function goToRiya() {
    navigate("/student/Riya");
  }

  return (
    <div className="container mt-5">

      <h1>Student List</h1>

      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <Link to={"/student/" + student}>
              {student}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="btn btn-primary"
        onClick={goToRiya}
      >
        Go to Riya
      </button>

    </div>
  );
}

export default Home;