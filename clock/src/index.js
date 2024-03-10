import React from "react";
import ReactDOM from "react-dom/client";
import Clock from "./Clock/Clock.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(<Clock />);
}, 1000);
