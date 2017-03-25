import React from 'react';
import Suggestion from './Suggestion';

function SuggestionList(props) {
    return <div>{props.suggestions.map(suggestion =>
        <Suggestion key={suggestion.id} suggestion={suggestion}/>
    )}</div>;
}

export default SuggestionList;
