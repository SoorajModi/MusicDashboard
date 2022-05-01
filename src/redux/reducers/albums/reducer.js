import { GET_ALBUMS } from './types';

const initialState = {
  albums: {},
  status: 'PENDING',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ALBUMS.PENDING:
      return {
        ...state,
        status: 'PENDING',
      };
    case GET_ALBUMS.REJECTED:
      return {
        ...state,
        status: 'FAILED',
      };
    case GET_ALBUMS.FULFILLED:
      return {
        ...state,
        status: 'READY',
        albums: action.payload.feed,
      };
    default:
      return state;
  }
}
