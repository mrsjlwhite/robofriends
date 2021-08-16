import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    
    //NOTE: kind of like the catch from try/catch
    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return (<h1>Uh oh. It's no bueno.</h1>)
        }
        return this.props.children;
    }
}

export default ErrorBoundry;