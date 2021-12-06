import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import rootReducer, { rootEpic } from './store/reducers';
import {loggerMiddleware}  from './store/middleware';

const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(loggerMiddleware,epicMiddleware));

epicMiddleware.run(rootEpic);
export { store };
