
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import sagas from "../sagas";
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['home', 'profile', 'login', 'emoji', 'msgs', 'activity', 'followers']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({});
const middleware = [logger, sagaMiddleware];

const store = createStore( persistedReducer, applyMiddleware(sagaMiddleware, logger))
let persistor = persistStore(store)
export default () => {
  	return { store, persistor }
}
sagaMiddleware.run(sagas)


