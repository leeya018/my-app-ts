import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/clock/clock";
import Nav from "./components/nav/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Clock />
    </div>
  );
}

export default App;
