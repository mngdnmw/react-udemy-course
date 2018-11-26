import * as actionTypes from "../actions";
const initialState = {

  results: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
     case actionTypes.STORE_RESULT:
      return {
        ...state,
        // this is similar to push, but it returns a new array with the old array plus the new value rather
        // manipulating the array directly
        results: state.results.concat({ id: new Date(), value: action.result })
      };
    case actionTypes.DELETE_RESULT:
      // one way to copy one array to another
      // const newArray = [...state.results];
      // newArray.splice(id, 1);

      //returns a new array where all items are copied over
      //const updatedArray= state.results.filter(result => true);

      //returns all elements in the array except those with an id same as action.resultId
      const updatedArray = state.results.filter(
        //(result, index) => index !== id
        result => result.id !== action.resultId
      );
      return {
        ...state,
        // results: newArray
        results: updatedArray
      };
    default:
      return state;
  }
};

export default reducer;
