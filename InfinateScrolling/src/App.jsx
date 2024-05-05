import { useState , useRef, useCallback} from "react";
import UseBookSearch from "./assets/UseBookSearch";


//const observer = useRef()

function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  UseBookSearch(query, pageNumber);

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  const { books, hasMore, loading, error } = UseBookSearch(query, pageNumber);
  return (
    <>
      <input type="text" value={query} onChange={handleSearch} />
      {books.map((book) => {
        return <div key={book}>{book}</div>;
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
     
    </>
  );
}

export default App;
z