import React from 'react';

class Suggestion extends React.Component {
    constructor(props) {
        super(props);

        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onUserClick(event.target.textContent);
    }

    render() {
        return (
            <div
                className="suggestion"
                onClick={this.handleClick}
            >
                {this.props.text}
            </div>
        );
    }
}

export default Suggestion;
