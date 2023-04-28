import React, { Component } from 'react';
import './Counter.css'; 

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    componentDidMount() {
        document.title = `le compteur est a ${this.state.counter}`;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.counter !== this.state.counter) {
            document.title = `le compteur est a ${this.state.counter}`;
        }
    }

    Increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    Decrement = () => {
        this.setState({ counter: this.state.counter - 1 });
    }

    Reset = () => {
        this.setState({ counter: 0 });
    }

    render() {
        return (
            <div className='counter'>
                <div className='number'> {this.state.counter}</div>
                <button className='btn increment' onClick={() => this.Increment()}>Increment +</button>
                <button className='btn decrement' onClick={() => this.Decrement()}>Decrement -</button>
                <button className='btn reset' onClick={() => this.Reset()}>Reset </button>
            </div>
        );
    }
}

export default Counter;
