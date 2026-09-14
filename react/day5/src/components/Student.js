import React from "react";
import { useParams } from "react-router-dom";

function Student() {

  const params = useParams();

  return (
    <div className="container mt-5 text-center">
      <h1>Welcome, {params.name}!</h1>
    </div>
  );
}

export default Student;