import React from 'react';
import { Component } from 'refast';
import * as logic from './logic';

export default class Counter extends Component {
  constructor(props) {
    super(props, logic);

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  onIncrement() {
    this.dispatch('increment', { value: this.state.value + 1 });
  }

  onDecrement() {
    this.dispatch('decrement');
  }

  incrementIfOdd() {
    if (this.state.value % 2 !== 0) {
      this.onIncrement();
    }
  }

  incrementAsync() {
    setTimeout(this.onIncrement, 1000);
  }

  render() {
    const { value } = this.state;
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={this.onIncrement}>
          +
        </button>
        {' '}
        <button onClick={this.onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    );
  }
}

