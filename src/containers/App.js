import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
    // where we declare our state, to handle changing values shared between components
    constructor() {
        super(); // calls the constructor, allows us to use 'this'
        this.state = { // these are the things that can change, hence in parent component
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ robots: users }))
    }

    //NOTE: important pattern to ensure this. is targeting correct place
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;

        const filteredRobots = robots.filter(robots => robots.name.toLowerCase().includes(searchfield.toLowerCase()));

        if (!robots.length) {
            return (<h1>Loading</h1>)
        }

        return (
            <div className='tc' style={{ overflowY: 'hidden' }}>
                <h1 className='f2'>Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
}

export default App;