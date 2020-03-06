import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Sampler } from "tone";
import A1 from "../A1.mp3";

export const App = () => {
  const [isLoaded, setLoaded] = useState(false);
  const sampler = useRef(null);

  useEffect(() => {
    sampler.current = new Sampler(
      { A1 },
      {
        onload: () => {
          setLoaded(true);
        }
      }
    ).toMaster();
  }, []);

  const handleClick = () => sampler.current.triggerAttack("A1");

  return (
    <div>
      <button disabled={!isLoaded} onClick={handleClick}>
        start
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));