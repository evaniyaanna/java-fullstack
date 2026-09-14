import React from "react";

function LightSwitch(props) {

  return (
    <button
      className="btn btn-primary"
      onClick={props.changeLight}
    >
      {props.isOn ? "Turn OFF" : "Turn ON"}
    </button>
  );
}

export default LightSwitch;