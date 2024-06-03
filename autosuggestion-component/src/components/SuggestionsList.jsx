import React from 'react'

const SuggestionsList = ({
    suggestions = [],
    highlight,
    datakey,
    onSuggestionClick,
}) => {

    const getHighlightedText = (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, "gi"))
        return <span>{parts.map((part, index) => {
          return part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={index}> {part}</b>
          ) : (
            parts
          );
        }) }</span>
}

    return (
        <React.Fragment> {suggestions.map((suggestion, index) => {
            const currentSuggestion = datakey ? suggestion[datakey] : suggestion
            
            return (
                <li
                    key={index}
                    onClick={() => onSuggestionClick(suggestion)}
                    className='suggestion-item'
                >
                    {getHighlightedText(currentSuggestion, highlight)}</li>
            )
                })}  </React.Fragment>
        )
}

export default SuggestionsList
