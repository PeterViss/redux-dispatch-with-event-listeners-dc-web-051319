let state;
let plusButton = document.getElementById("plusButton");
let minusButton = document.getElementById("minusButton");
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { count: state.count + 1 };
    case "DECREASE_COUNT":
      if (state.count === 0) {
        alert("Cannot Decrease Below 0!");
      } else {
        return { count: state.count - 1 };
      }
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById("container");
  container.textContent = state.count;
}

function dispatch(action) {
  state = reducer(state, action);
  render();
}

plusButton.addEventListener("click", () => {
  dispatch({ type: "INCREASE_COUNT" });
});

minusButton.addEventListener("click", () => {
  dispatch({ type: "DECREASE_COUNT" });
});
dispatch({ type: "@@INIT" });
