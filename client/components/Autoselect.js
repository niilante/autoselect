import React from 'react';
import SearchBar from './SearchBar';
import SuggestionList from './SuggestionList';

class Autoselect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: '',
            isOpen: false
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleUserInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    handleFocus() {
        this.setState({
            isOpen: true
        });
    }

    handleBlur() {
        this.setState({
            isOpen: false
        });
    }

    render() {
        return <div className="autoselect">
            <SearchBar
                filterText={this.state.filterText}
                onUserInput={this.handleUserInput}
                handleFocus={this.handleFocus}
                handleBlur={this.handleBlur}
            />
            <SuggestionList
                filterText={this.state.filterText}
                suggestions={this.props.suggestions}
                isOpen={this.state.isOpen}
                onUserClick={this.handleUserInput}
            />
        </div>;
    }
}

export default Autoselect;
