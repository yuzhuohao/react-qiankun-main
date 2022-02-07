import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import intlState from './reducers/intl';
import menuState from './reducers/menu';
import thunkMiddleware from 'redux-thunk';

const reducer = combineReducers({
	intlState,
	menuState,
});
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export default store;
