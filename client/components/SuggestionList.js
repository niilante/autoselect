import React from 'react';
import Suggestion from './Suggestion';

function SuggestionList(props) {
    let suggestions = [];
    props.suggestions.forEach(suggestion => {
        if (suggestion.text.indexOf(props.filterText) === -1) {
            return;
        }

        suggestions.push(
            <Suggestion
                key={suggestion.id}
                text={suggestion.text}
                onUserClick={props.onUserClick}
            />
        );
    });

    let classNames = 'suggestion-list';
    classNames += props.isOpen ? ' is-open' : '';

    return (
        <div
            className={classNames}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
        >
            {suggestions}
        </div>
    );
}

export default SuggestionList;
