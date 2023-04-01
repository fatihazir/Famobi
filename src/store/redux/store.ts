import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import thunk from 'redux-thunk';

import gamesReducer from './gamesSlice';

const reducers = combineReducers({
    games: gamesReducer
});

const store = configureStore({
    reducer: reducers,
    middleware: [thunk]
});

export default store;