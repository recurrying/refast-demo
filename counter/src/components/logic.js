export function defaults() {
  return {
    value: 0,
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
