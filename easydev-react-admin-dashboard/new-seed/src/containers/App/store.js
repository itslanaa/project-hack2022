import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { sidebarReducer, themeReducer, rtlReducer } from '@/redux/reducers/index';

const reducer = combineReducers({
  theme: themeReducer,
  sidebar: sidebarReducer,
  rtl: rtlReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
