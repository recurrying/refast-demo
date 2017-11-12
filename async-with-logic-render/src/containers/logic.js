function getPosts(response) {
  return response.data.children.map(child => child.data);
}

export default {
  defaults() {
    return {
      selectedReddit: 'reactjs',
      posts: [],
      isFetching: false,
      lastUpdated: Date.now(),
    };
  },
  update({ setState }, state) {
    setState(state);
  },
  async fetchPosts({ fn, setState, env }, fetchParams = {}) {
    const { selectedReddit = 'reactjs' } = fetchParams;
    setState({ isFetching: true });
    const response = await fn.receivePosts(selectedReddit);
    setState({
      isFetching: false,
      posts: getPosts(response),
      lastUpdated: Date.now(),
    });
  },
};
