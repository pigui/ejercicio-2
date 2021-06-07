import { combineReducers } from 'redux';
import markerReducer from './markerReducer';
import searchReducer from './searchReducer';

const reducers = combineReducers({
  marker: markerReducer,
  search: searchReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
