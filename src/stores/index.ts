import { createStore } from 'redux';
import { combineReducers } from 'redux';
import intlState from './reducers/intl';
import menuState from './reducers/menu';

const reducer = combineReducers({
	intlState,
	menuState,
});
const store = createStore(reducer);
export default store;
