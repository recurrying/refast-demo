import React from 'react';
import { Component } from 'refast';
import LogicRender, { connect } from 'refast-logic-render';
import logic from './logic';
import Picker from '../components/Picker';
import Posts from '../components/Posts';

class App extends Component {

  constructor(props) {
    super(props, logic);

    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleRefresh() {
    const { selectedReddit } = this.state;
    this.dispatch('fetchPosts', { selectedReddit });
  }

  handleChange(selectedReddit) {
    this.dispatch(['update'], { selectedReddit });
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
        <LogicRender isLoading={isFetching} yourCustomProps="Refresh button is hiden while  fetching">
          Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
          <button onClick={this.handleRefresh}>Refresh</button>
        </LogicRender>
        <Posts
          posts={posts}
          isEmpty={isEmpty}
          selectedReddit={selectedReddit}
          isLoading={isFetching}
        />
      </div>
    );
  }
}


export default connect(App);
