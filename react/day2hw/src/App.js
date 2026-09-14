import React from "react";
import "./App.css";

function App() {

  const name = "Evaniya";
  const age = 20;
  const isStudent = true;

  const favoriteHobbies = ["Reading", "Music", "Coding"];

  const headingColor = "lightblue";

  // Creating list using for loop
  let hobbyList = [];

  for (let i = 0; i < favoriteHobbies.length; i++) {
    hobbyList.push(
      <li key={i}>{favoriteHobbies[i]}</li>
    );
  }

  // Function to show enthusiasm
  function showEnthusiasm() {
    document.getElementById("message").innerHTML =
      "Hello from React! I love my hobbies!";

    document.getElementById("heading").style.backgroundColor =
      headingColor;
  }

  return (
    <div className="container mt-5">

      <h1 id="heading" className="text-center p-3 mb-4">
        My Personal Information
      </h1>

      {/* Personal Information Card */}
      <div className="card p-4 mb-4">

        <h3>Personal Information</h3>

        <p>
          <strong>Name:</strong> {name}
        </p>

        <p>
          <strong>Age:</strong> {age}
        </p>

        <p>
          <strong>Student:</strong> {isStudent}
        </p>

      </div>

      {/* For Loop List */}
      <div className="card p-4 mb-4">

        <h3>My Favorite Hobbies - For Loop</h3>

        <ul>
          {hobbyList}
        </ul>

      </div>

      {/* Map List */}
      <div className="card p-4 mb-4">

        <h3>My Favorite Hobbies - Map</h3>

        <ul>
          {favoriteHobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>

      </div>

      {/* Button and Message */}
      <div className="text-center">

        <button
          className="btn btn-primary"
          onClick={showEnthusiasm}
        >
          Show Enthusiasm
        </button>

        <p id="message" className="mt-3">
          Click the button to see my enthusiasm!
        </p>

      </div>

    </div>
  );
}

export default App;