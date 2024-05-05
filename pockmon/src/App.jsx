import { useState, useEffect } from "react";
import PokemanList from "./assets/PokemanList";
import Pagination from "./assets/Pagination";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    setLoading(true)

    let cancel
    axios.get(currentUrl, {
      
      cancelToken: new axios.CancelToken(c=> cancel=c)
    }).then((res) => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)

      setPokemon(res.data.results.map((p) => {
        const link = p.url
        return (
          p.name + link)
      } 
      ));
    });
     return () => cancel();
  },
    [currentUrl]);

  function gotoNextPage() {
    setCurrentUrl(nextPageUrl)
  }
  function gotoPrevPage() {
    setCurrentUrl(prevPageUrl);
  }

  if(loading) return "Loading..."

  return (
    <>
      <PokemanList pokemon={pokemon} />
      <Pagination
        gotoNextPage={nextPageUrl ?gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage :null }
      />
    </>
  );
}

export default App;
