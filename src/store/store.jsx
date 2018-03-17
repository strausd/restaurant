import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { restaurants } from '../reducers/baseReducer';

export default () => {
    const store = createStore(
        restaurants,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk)
    );
    return store;   
}