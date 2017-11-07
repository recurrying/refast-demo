function getPosts(response) {
  return response.data.children.map(child => child.data);
}

export default {
  defaults(props) {
    return {
      selectedReddit: 'reactjs',
      posts: [],
      isFetching: false,
      lastUpdated: Date.now(),
    };
  },
  update({ setState }, state) {
    setState(state)
  },
  async fetchPosts({ fn, setState, env }, fetchParams = {}) {
    const { selectedReddit = 'reactjs' } = fetchParams;
    // we can get `process.env` here,
    // caused env has been defined by `Refast.use`
    console.log('env.NODE_ENV info from logic: ', env.NODE_ENV);

    setState({ isFetching: true });
    const response = await fn.receivePosts(selectedReddit);
    setState({
      isFetching: false,
      posts: getPosts(response),
      lastUpdated: Date.now(),
    });
  }
}
