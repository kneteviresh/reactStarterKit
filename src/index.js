import React, {Component} from 'react';
import {render} from 'react-dom';
import routes from './routes';
import {Router, browserHistory, hashHistory} from 'react-router';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'
import {Provider} from 'react-redux';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

let store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)));

render(
    <Provider store={store}>
    <Router history={browserHistory} routes={routes}/></Provider>, document.getElementById('root'));
