import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
