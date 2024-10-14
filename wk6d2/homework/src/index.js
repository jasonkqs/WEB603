import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Counter, { counterStore } from './counter';

const App = () => (
  <Provider store={counterStore}>
    <Counter />
  </Provider>
)

render(<App />, document.getElementById('root'));