import React from 'react';

function SearchBar(props)
{
    return <form>
        <input
            type="text"
            placeholder="Type and select..."
            value={props.filterText}
        />
    </form>
}

export default SearchBar;
