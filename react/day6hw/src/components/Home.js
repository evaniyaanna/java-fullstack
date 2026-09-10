import React from "react";

function Home() {
  const headingColor = "lightblue";

  function showEnthusiasm() {
    document.getElementById("message").innerHTML =
      "Hello from React! I love this page!";

    document.getElementById("heading").style.backgroundColor =
      headingColor;
  }

  return (
    <div className="container mt-5">

      <div className="card p-4 mb-4">

        <h1 id="heading">This is the Home Page</h1>

        <button
          className="btn btn-primary"
          onClick={showEnthusiasm}
        >
          Show Enthusiasm
        </button>

        <p id="message">
          Click the button to see my enthusiasm!
        </p>

      </div>

    </div>
  );
}

export default Home;