// Node code
const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0
};
// Reducer - needs to be created before store because it will be passed to the store
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};
// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription - need to be before dispatching action because we want to know when things have been changed
store.subscribe(()=>{
    console.log("[Subscription]", store.getState());
})

// Dispatching action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });

