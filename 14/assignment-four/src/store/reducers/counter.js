import * as actionTypes from "../actions/actionTypes";
import {updateObject} from "../utility";
const initialState = {
  counter: 0
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // const newState = Object.assign({}, state);
      // newState.counter = state.counter + 1;
      // //in javascript objects are reference types, so need to make them immutable - this
      // //would have been okay because we are only changing the counter, which is immutable (it is a primitive type),
      // //but arrays are not
      // return newState;
      return updateObject(state, { counter: state.counter + 1 });
    //return { counter: state.counter + 1 };
    case actionTypes.DECREMENT:
      // return {
      //   ...state,
      //   counter: state.counter - 1
      // };
      return updateObject(state, { counter: state.counter - 1 });
    //return { counter: state.counter - 1 };
    case actionTypes.ADD:
      // return {
      //   ...state,
      //   counter: state.counter + action.value
      // };
      return updateObject(state, { counter: state.counter + action.value });
    //return { counter: state.counter + action.value };
    case actionTypes.SUBTRACT:
      // return {
      //   ...state,
      //   counter: state.counter - action.value
      // };
      return updateObject(state, { counter: state.counter - action.value });
    //return { counter: state.counter - action.value };
    default:
      return state;
  }
};

export default reducer;
