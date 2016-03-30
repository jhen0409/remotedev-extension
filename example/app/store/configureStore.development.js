import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import devTools from 'remote-redux-devtools';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const router = routerMiddleware(hashHistory);

const enhancer = compose(
  applyMiddleware(thunk, router, logger),
  devTools({
    name: 'Electron',
    hostname: 'localhost',
    port: 8000
  })
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
