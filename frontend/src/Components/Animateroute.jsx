import React from "react";
import Formcomponents from "./Formcomponents";
import StudentData from "./StudentData";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Updatedata from "./Updatedata";
import Projectdocument from "./Projectdocument";

const Animateroute = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      {" "}
      <Routes location={location} key={location.pathname}>
        {" "}
        <Route element={<StudentData />} exact path="/" />
        <Route element={<Formcomponents />} path="/form" />
        <Route element={<Updatedata />} path="/update" />
        <Route element={<Projectdocument />} path="/project" />
      </Routes>
    </AnimatePresence>
  );
};

export default Animateroute;
