import React from 'react';
import Refast from 'refast';
import LogicRender from 'refast-logic-render';
import { render } from 'react-dom';
import App from './containers/App';

Refast.use('fn', {
  receivePosts: reddit => fetch(`https://www.reddit.com/r/${reddit}.json`).then(response => response.json()),
});

//  可以定制化你自己的 Loading 或者 Empty 视图
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
