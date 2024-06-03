import React, { useCallback, useEffect, useState } from "react";
import './style.css'
import SuggestionsList from "./SuggestionsList";
import debounce from 'lodash/debounce'

const Autocomplete = (
    {
     placeholder="",
      staticData ,
      fetchSugestions,
      datakey="",
      customLoading="Loading",
      onSelect=() => {},
      onChange=() => {},
      onBlur=() => {},
      onFocus=() => {},
      customStyles = {},
    }
) => {

    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    console.log (suggestions)

    const handleInputchange = (event) => {
        setInputValue(event.target.value)
        onChange(event.target.value)
    }
    
    const getSuggestions =async (query) => {
        setError(null)
        setLoading(true)

        try {
            let result;
            if (staticData) {
                result = staticData.filter((item) => {
                     return item.toLowerCase().includes(query.toLowerCase())
                })
               
            } else if (fetchSugestions) {
               result = await(fetchSugestions(query))
            }
             setSuggestions(result);
        } catch (err) {
            setError("Failed to fetch suggestions");
            setSuggestions([])
        } finally {
            setLoading(false)
        }
    }

    const getSuggestionsDebounced = useCallback(debounce(getSuggestions, 300),[])

    useEffect(()=>{
        if (inputValue.length > 1) {
           getSuggestionsDebounced(inputValue);
        } else {
            setSuggestions([])
        }
        
    }, [inputValue])

    const handleSuggestionClick = (suggestion) => {
        setInputValue(datakey ? suggestion[datakey] : datakey)
        onSelect(suggestions)
        setSuggestions([])
    }

  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        style={customStyles}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={handleInputchange}
      />

          {(suggestions.length > 0 || loading || error) &&
              <ul className="suggestions-list">
        {error && <div className="error">{error}</div>}
        {loading && <div className="loading">{customLoading}</div>}

              <SuggestionsList
                  datakey={datakey}
                  highlight={inputValue}
                  suggestions={suggestions}
                  onSuggestionClick={handleSuggestionClick}
              />   
      </ul>}
    </div>
  );
};

export default Autocomplete;
