import React from 'react';
import { connect } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
  },
});

const { increment, decrement } = counterSlice.actions;
const counterReducer = counterSlice.reducer;

export const counterStore = configureStore({
  reducer: {
    counter: counterReducer
  }
});

class Counter extends React.Component {
  state = { count : 0 };

  increment = () => {
    this.props.dispatch(increment());
  }

  decrement = () => {
    this.props.dispatch(decrement());
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <span>{this.props.count}</span>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
}

export default connect(mapStateToProps)(Counter);