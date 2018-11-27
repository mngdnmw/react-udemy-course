import * as actionTypes from "./actionTypes";

export const saveResult = res => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};

//Async
export const storeResult = res => {
  return function(dispatch, getState) {
    setTimeout(() => {
        //const oldCounter = getState().ctr.counter;
      //Sync
      dispatch(saveResult(res));
    }, 2000);
  };
};
export const deleteResult = id => {
  return {
    type: actionTypes.DELETE_RESULT,
    resId: id
  };
};
