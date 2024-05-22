import { useState } from "react";

import "./App.css";
import StarRating from "./components/start-rating";
import RandomColor from "./components/Index";
import ImageSlider from "./components/imageSldier/Index";
import Load from "./components/load-more-data/Load";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       {/*<RandomColor />*/}

      {/*<StarRating noOfStars={10} />*/}
     {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
  />*/}
      <Load />
    </>
  );
}

export default App;
