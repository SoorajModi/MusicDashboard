import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import albums from './albums/reducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  albums,
});

export default createRootReducer;
