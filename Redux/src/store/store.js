import { configureStore, combineReducers } from '@reduxjs/toolkit';

import counterReducer from './Counter';
import authReducer from './Auth';

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer
});

export const store = configureStore({
    reducer: rootReducer
});
