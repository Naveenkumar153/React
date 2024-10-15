import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { counter: 0, showCounter: true },
    reducers: {
        resetCounter(state, action) {
            state.counter = action.payload;
        },
        increment(state, action) {
            state.counter = state.counter + action.payload;
        },
        decrement(state, action) {
            state.counter = state.counter - action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});


export const counterActions = counterSlice.actions;
export default counterSlice.reducer;

// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//     console.log({ state, action });
//     switch (action.type) {
//         case "INCREMENT":
//             return { ...state, counter: state.counter + action.payload }; 
//         case "DECREMENT":
//             return { ...state, counter: state.counter - action.payload }; 
//         case "TOGGLE_COUNTER":
//             return { ...state, showCounter: !state.showCounter }; // Toggle the current value of showCounter
//         default:
//             return state;
//     }
// };

