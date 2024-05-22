import { useState } from "react";

import "./App.css";
import StarRating from "./components/start-rating";
import RandomColor from "./components/Index";
import ImageSlider from "./components/imageSldier/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       {/*<RandomColor />*/}

      {/*<StarRating noOfStars={10} />*/}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </>
  );
}

export default App;
