import { createStore } from "redux";

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
    console.log({ state, action });
    switch (action.type) {
        case "INCREMENT":
            return { ...state, counter: state.counter + action.payload }; 
        case "DECREMENT":
            return { ...state, counter: state.counter - action.payload }; 
        case "TOGGLE_COUNTER":
            return { ...state, showCounter: !state.showCounter }; // Toggle the current value of showCounter
        default:
            return state;
    }
};


const store = createStore(counterReducer);
export default store;