import React, { useState, useEffect } from "react";

function App() {
  let [userName, setUserName] = useState("Guest");

  useEffect(() => {
    if (userName === "Alice") {
      console.log("User changed to Alice");
    }
  }, [userName]);

  function login() {
    setUserName("Alice");
  }

  return (
    <div>
      <h1>Welcome, {userName}!</h1>

      <button onClick={login}>
        Login as Alice
      </button>
    </div>
  );
}

export default App;