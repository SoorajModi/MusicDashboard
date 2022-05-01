import { GET_ALBUMS } from '../../redux/reducers/albums/types';
import { get } from '../fetch';

export const getAlbums = () => (dispatch) => dispatch(
  get(
    GET_ALBUMS.REQUEST,
    '/api/v2/us/music/most-played/50/albums.json',
  ),
);
