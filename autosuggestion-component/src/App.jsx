
import './App.css'
import Autocomplete from './components/Autocomplete'

function App() {
 


  const fetchSuggestions = async (query) => {
    //fetching data from json dummy data
    
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
    if (!response.ok) {
      throw new Error("network response was not ok !")
    }
    const result = await response.json();
    return result.recipes;
}
  return (
    <div>
      <h1>Autocomplete / Typehead</h1>
      <Autocomplete
        placeholder={"Enter Recipe"}
        //staticData = {}
        fetchSugestions={fetchSuggestions}
        datakey={'name'}
        customLoading={<>Loading recipes..</>}
        onSelect={(res) => console.log(res)}
        onChange={(input) => { }}
        onBlur={(e) => { }}
        onFocus={(e) => { }}
        customStyles = {{}}
      />
    </div>
  )
}

export default App
