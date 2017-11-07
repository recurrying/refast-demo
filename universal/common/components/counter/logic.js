export function defaults(props) {
  return {
    value: props.counter,
  };
}

export function increment({ setState }, value) {
  setState(value);
}

export function decrement({ getState, setState }) {
  const { value } = getState();
  setState({
    value: value - 1,
  });
}
