import React from "react";

function Clock(props) {
  return (
    <div>
      <h1>This is React Clock!</h1>
      <h2>Current Time: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
