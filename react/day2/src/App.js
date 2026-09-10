import React, { useState } from "react";

function App() {
  let foods = ["Pizza", "Biriyani", "Burger", "Ice Cream"];

  let [message, setMessage] = useState(
    "Select a food that you love!"
  );

  function loveFood(food) {
    setMessage("I love " + food + "!");
  }

  return (
    <div>
      <h1>My Favorite Foods</h1>

      <ul>
        {foods.map((food) => (
          <li key={food}>
            {food}

            <button onClick={() => loveFood(food)}>
              Love
            </button>
          </li>
        ))}
      </ul>

      <p>{message}</p>
    </div>
  );
}

export default App;