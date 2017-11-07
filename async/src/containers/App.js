import React from 'react';
import { Component } from 'refast';
import PropTypes from 'prop-types';
import logic from './logic';
import Picker from '../components/Picker'
import Posts from '../components/Posts'

export default class App extends Component {

  constructor(props) {
    super(props, logic);

    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.dispatch('fetchPosts');
  }
  handleRefresh() {
    const { selectedReddit } = this.state;
    this.dispatch('fetchPosts', { selectedReddit });
  }
  handleChange(selectedReddit) {
    this.dispatch(['update', 'fetchPosts'], { selectedReddit })
  }

  render() {
    const { selectedReddit, posts, isFetching, lastUpdated } = this.state;
    const isEmpty = posts.length === 0;
    return (
      <div>
        <Picker
          value={selectedReddit}
          onChange={this.handleChange}
          options={['reactjs', 'frontend']}
        />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
            <button onClick={this.handleRefresh}>
              Refresh
            </button>
          }
        </p>
        {isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>
        }
      </div>
    )
  }
}
