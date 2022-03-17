import React from "react";
import { dinamicTitle } from "../utils/Title";

const Notfound = () => {
  dinamicTitle("404 Not Found");
  return (
    <div className="not-found">
      <div className="contenido-not-found">
        <img src="/notfound.svg" alt="" width={100} height={100} />
        <h1>404 Not Found</h1>
      </div>
    </div>
  );
};

export default Notfound;
