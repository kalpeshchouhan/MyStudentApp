import React, { memo } from "react";
import sp from "./reactspinner.module.css";

const Reactspinner = () => {
  return (
    <>
      <div className={sp.spinner}></div>
    </>
  );
};

export default memo(Reactspinner);
