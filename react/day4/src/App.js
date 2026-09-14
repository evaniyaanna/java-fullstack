import React, { useState, useEffect } from "react";


function App() {

  const [userName, setUserName] = useState("Guest");

  useEffect(() => {
    if (userName === "Alice") {
      console.log("User changed to Alice");
    }
  }, [userName]);

  function loginAsAlice() {
    setUserName("Alice");
  }

  return (
    <div className="container mt-5 text-center">

      <div className="card p-4">

        <h1>Welcome, {userName}!</h1>

        <button
          className="btn btn-primary"
          onClick={loginAsAlice}
        >
          Login as Alice
        </button>

      </div>

    </div>
  );
}

export default App;