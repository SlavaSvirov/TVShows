import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const store = createStore(reducer,  composeWithDevTools(applyMiddleware(thunk)));


// const saveState = (state) => {
//     try {
//        //Convert the state to a JSON string 
//         const serialisedState = JSON.stringify(state);

//        //Save the serialised state to localStorage against the key 'app_state'
//         window.localStorage.setItem('app_state', serialisedState);
//     } catch (err) {
//        //Log errors here, or ignore
//     }
// };

// const loadState =() => {
//     try {
//        //Load the data saved in localStorage, against the key 'app_state'
//         const serialisedState = window.localStorage.getItem('app_state');

//        //Passing undefined to createStore will result in our app getting the default state
//        //If no data is saved, return undefined
//         if (!serialisedState) return undefined;

//        //De-serialise the saved state, and return it.
//         return JSON.parse(serialisedState);
//     } catch (err) {
//        //Return undefined if localStorage is not available, 
//        //or data could not be de-serialised, 
//        //or there was some other error
//         return undefined;
//     }
// };

// /**
//  * This is where you create the app store
//  */
// const oldState = loadState();

// /**
//  * Add a change listener to the store, and invoke our saveState function defined above.
//  */
// store.subscribe(() => {
//     saveState(store.getState());
// });



export default store;
