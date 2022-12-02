import {Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import LineChart from "./components/features/LineChart/LineChart";
import Home from "./components/pages/Home/Home";
function App() {
  return (
    <div className="App">
      {/* <Routes> */}
      {/* <Route path="/" element={<Home />}/> */}
      {/* </Routes> */}
    <LineChart/>
    </div>
  );
}

export default App;
