import React from "react";
import Navbar from "./Components/Navbar";
import Animateroute from "./Components/Animateroute";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        {" "}
        <Navbar />
        <Animateroute />
      </Router>
    </>
  );
};

export default App;
