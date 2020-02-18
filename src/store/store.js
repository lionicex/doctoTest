import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import primaryReducer from './reducers';

const initialState = {};
const middleware = [thunk];
const store = createStore(primaryReducer, initialState, compose(applyMiddleware(...middleware)
));

export default store;