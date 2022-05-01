import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const middlewares = [thunk, promise, routerMiddleware(history)];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  return createStore(createRootReducer(history), preloadedState, composedEnhancers);
}
