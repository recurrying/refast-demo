import React from 'react';
import PropTypes from 'prop-types';
import LogicRender from 'refast-logic-render';

const Posts = ({ posts, isLoading, isEmpty, selectedReddit }) => (
  <LogicRender isEmpty={isEmpty} awareOf={{ selectedReddit }} action="fetchPosts" isLoading={isLoading}>
    <h1>selectedReddit now is: {selectedReddit}</h1>
    <ul>
      {posts.map((post, i) =>
        <li key={i}>{post.title}</li>,
      )}
    </ul>
  </LogicRender>
);

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Posts;
