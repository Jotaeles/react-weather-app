import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';

const initialState = {
    city: 'Buenos Aires,ar',
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Creamos el store que nos pide un Reducer(una función)
// y como segundo parametro un estado inicial
export const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));