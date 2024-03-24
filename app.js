import store from "./redux/store.js";

import { increase,decrease,reset } from "./redux/actions/counterActions.js";
// console.log("iii",store.getState());

// dispatchEvent(); action details as object 


// store.dispatch(increase());
//    ||
//    \/ 
// store.dispatch({type:INCREASE})

// app to store dispatch()

// console.log(store.getState());

// we increase as function  because 
// if we want to pass any parameter form one file to another it 
// easier and we can do it here in functions 

// increase(100); if we want to increase the count by 100

store.dispatch(increase(100));
console.log(store.getState());