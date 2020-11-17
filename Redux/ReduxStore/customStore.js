import reducer from "./reducer";

function createSotre(reducer) {
  let state;

  function dispatch(action) {
    // Call reducer to get new State
    state = reducer(state, action);
    // Notify subscribers
  }

  function getState() {
    return state;
  }

  return {
    dispatch,
    getState,
  };
}

export default createSotre(reducer);
