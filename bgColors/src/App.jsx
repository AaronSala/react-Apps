import { useState } from "react";

import "./App.css";
import StarRating from "./components/start-rating";
import RandomColor from "./components/Index";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RandomColor />
      
      <StarRating  noOfStars={10} />
    </>
  );
}

export default App;
