import React, { useState, useEffect } from "react";
import "./App.css";
import Starts from "./components/Start";

function App() {
  const [span, setSpan] = useState(0);
  const [theme, setTheme] = useState("brown");
  function onclickSub() {
    setSpan(span - 1);
  }
  useEffect(() => {
    if (span < 0) {
      setTheme("red");
    } else if(span===0){
      setTheme("brown")
    }
    else {
      setTheme("green");
    }
  }, [span]);

  function onclickAdd() {
    setSpan(span + 1);
  }



  return (
    <div className="App" style={{ background: theme }}>
      <button className="btn" onClick={onclickSub}>
        -
      </button>
      <span>{span}</span>
      <button className="btn" onClick={onclickAdd}>
        +
      </button>
    </div>
  );
}

export default App;
