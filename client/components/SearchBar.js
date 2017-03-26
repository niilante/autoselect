import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onUserInput(this.filterTextInput.value);
    }

    render() {
        return <form className="search-bar">
            <input
                type="text"
                placeholder="Type and select..."
                value={this.props.filterText}
                ref={(input) => this.filterTextInput = input}
                onChange={this.handleChange}
                onFocus={this.props.handleFocus}
                onBlur={this.props.handleBlur}
            />
        </form>
    }
}

export default SearchBar;
