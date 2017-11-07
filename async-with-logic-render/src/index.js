import React from 'react';
import Refast from 'refast';
import { render } from 'react-dom';
import App from './containers/App';

if (process.env.NODE_ENV !== 'production') {
  console.log('env.NODE_ENV info from index：', process.env.NODE_ENV);
}

Refast.use('fn', {
  receivePosts: reddit => fetch(`https://www.reddit.com/r/${reddit}.json`).then(response => response.json()),
});

Refast.use('env', {
  NODE_ENV: process.env.NODE_ENV,
});

render(<App />, document.getElementById('root'));
