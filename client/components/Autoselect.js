import React from 'react';
import SearchBar from './SearchBar';
import SuggestionList from './SuggestionList';

function Autoselect(props) {
    return <div>
        <SearchBar />
        <SuggestionList suggestions={props.suggestions} />
    </div>;
}

export default Autoselect;
