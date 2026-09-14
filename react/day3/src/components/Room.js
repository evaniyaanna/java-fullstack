import React, { useState } from "react";
import LightSwitch from "./LightSwitch";

function Room() {

  const [isOn, setIsOn] = useState(false);

  function changeLight() {
    setIsOn(!isOn);
  }

  return (
    <div className="text-center">

      <h1>
        {isOn ? "The room is bright" : "The room is dark"}
      </h1>

      <LightSwitch
        isOn={isOn}
        changeLight={changeLight}
      />

    </div>
  );
}

export default Room;