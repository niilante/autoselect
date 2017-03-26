import React from 'react';
import SearchBar from './SearchBar';
import SuggestionList from './SuggestionList';

class Autoselect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: ''
        };

        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    render() {
        return <div>
            <SearchBar
                filterText={this.state.filterText}
                onUserInput={this.handleUserInput}
            />
            <SuggestionList
                filterText={this.state.filterText}
                suggestions={this.props.suggestions}
            />
        </div>;
    }
}

export default Autoselect;
