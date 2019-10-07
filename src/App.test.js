import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
var test = require('tape');

test('renders without crashing', (t) => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  t.end();
});