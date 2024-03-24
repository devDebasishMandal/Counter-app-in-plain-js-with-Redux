// every action creator file will have
// reducer file

import { DECREASE, INCREASE, RESET } from "../actions/actionTypes.js";
// import { increase,decrease,reset } from "../actions/counterActions";

const initialState = { count: 0 }

// state= initialState because when the app runs for the first time
// then we do not get the undefined value
// action is the object here

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + action.value };
    case DECREASE:
      return { ...state, count: state.count - action.value };

    case RESET:
      return initialState;
      

      default:
        return state;
  }
};

export default counterReducer;
