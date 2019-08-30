import React, { Component } from 'react';

class Greeting extends Component {
    state = { message: 'Hello, world!' }
    componentDidMount() {
        let { message } = this.props;
        if (message) {
            this.setState({ message });
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}

export default Greeting;