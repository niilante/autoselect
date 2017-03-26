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
        return <form>
            <input
                type="text"
                placeholder="Type and select..."
                ref={(input) => this.filterTextInput = input}
                onChange={this.handleChange}
            />
        </form>
    }
}

export default SearchBar;
