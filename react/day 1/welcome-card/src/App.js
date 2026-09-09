import React from "react";
import image from "./images/pic.jpg";

function App() {
  let userName = "evaniya";

  console.log("React app started");

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4 text-center" style={{ width: "500px" }}>

        <h1
          style={{
            color: "blue",
            fontSize: "30px",
            fontWeight: "bold"
          }}
        >
          Welcome to React Learning, {userName}
        </h1>

        <div className="mt-3">
          <img
            src={image}
            alt="Internal"
            className="img-fluid rounded"
            style={{ width: "200px" }}
          />
        </div>

        <div className="mt-3">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7cfec80-3330-4e34-9bd4-6a96f7ea46ca/di1885t-4d2894f1-46d3-46c7-9787-16ced2154ca8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9hN2NmZWM4MC0zMzMwLTRlMzQtOWJkNC02YTk2ZjdlYTQ2Y2EvZGkxODg1dC00ZDI4OTRmMS00NmQzLTQ2YzctOTc4Ny0xNmNlZDIxNTRjYTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rHmmrCvG4qSMPI9hCYGYY1r7KBI3nAdqrhRBA06ztRA"
            alt="External"
            width={150}
            height={120}
            className="img-fluid rounded"
          />
        </div>

        <p className="text-muted mt-3">
          This is your first card with images and styles!
        </p>

      </div>
    </div>
  );
}

export default App;