import React from "react";
import image from "./images/profile.jpg";

function App() {
  let personName = "Evaniya";
  let description = "I am learning React and Bootstrap.";

  let cardStyle = {
    border: "2px solid black",
    padding: "20px",
    backgroundColor: "lightblue",
    width: "400px",
    textAlign: "center"
  };

  console.log("React app started");

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div style={cardStyle}>

        <h1>Profile Card</h1>

        <h2>{personName}</h2>

        <p>{description}</p>

        <img
          src={image}
          alt="Internal profile"
          className="img-fluid"
          style={{ width: "200px" }}
        />

        <br />
        <br />

        <img
          src="https://wallpapercave.com/wp/wp14686440.jpg"
          alt="External profile"
          className="img-fluid"
          style={{ width: "400px" }}
        />

      </div>
    </div>
  );
}

export default App;