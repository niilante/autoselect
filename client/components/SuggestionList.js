import React from 'react';
import Suggestion from './Suggestion';

function SuggestionList(props) {
    let suggestions = [];
    props.suggestions.forEach(suggestion => {
        if (suggestion.text.indexOf(props.filterText) === -1) {
            return;
        }

        suggestions.push(
            <Suggestion key={suggestion.id} text={suggestion.text} />
        );
    });

    return <div>{suggestions}</div>;
}

export default SuggestionList;
