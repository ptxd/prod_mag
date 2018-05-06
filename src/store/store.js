import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers/red_index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import ReduxPromise from 'redux-promise';

export default function configureStore(initialState){
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk,ReduxPromise,logger)
    );
    return store;
}
