import React from 'react';
import Refast from 'refast';
import LogicRender from 'refast-logic-render';
import { render } from 'react-dom';
import App from './containers/App';

Refast.use('fn', {
  receivePosts: reddit => fetch(`https://www.reddit.com/r/${reddit}.json`).then(response => response.json()),
});

// Customize LogicRender of yourself's
const Loading = (props) => {
  const { yourCustomProps } = props;
  return (
    <div>
      { yourCustomProps || 'Loading' }
    </div>
  );
};

const Empty = () => <div>No Data</div>;

LogicRender.defaultProps = {
  ...LogicRender.defaultProps,
  Loading,
  Empty,
};

render(<App />, document.getElementById('root'));
