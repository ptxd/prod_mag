import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers/reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default function configureStore(initialState){
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk,logger)
    );
    return store;
}
