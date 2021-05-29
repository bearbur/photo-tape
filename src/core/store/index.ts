import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './root-reducer';
import { rootSaga } from './root-saga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
const store = createStore(
    rootReducer,
    process.env.NODE_ENV.toLowerCase() === 'development'
        ? applyMiddleware(sagaMiddleware, logger)
        : applyMiddleware(sagaMiddleware)
);

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;
