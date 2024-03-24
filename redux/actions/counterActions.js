// Action Creators file  

// IMPORT ACTIONS 

import { INCREASE,DECREASE,RESET } from "./actionTypes.js ";

export const increase =(value=1)=>{
    return {
        type:INCREASE,
        value:value
    }
}
export const decrease = (value=1) => {
  return {
    type: DECREASE,
    value: value,
  };
};
export const reset = () => {
  return {
    type: RESET,
  };
};