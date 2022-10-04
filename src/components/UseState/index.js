import "./UseState.css";
import { useState } from "react";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>

      <button
        onClick={() => {
          theme === "light" ? setTheme("dark") : setTheme("light");
        }}
      >
        Switch on!
      </button>

      <h2> Counter: {count} </h2>
      <button
        onClick={() => {
          setCount((prevState) => prevState + 1);
        }}
      >
        Count Up
      </button>

      <button
        onClick={() => {
          setCount((prevState) => prevState - 1);
        }}
      >
        Count Down
      </button>
    </div>
  );
};

export default UseState;
