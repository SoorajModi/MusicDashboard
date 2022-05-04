import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAlbums } from '../../api/albums';
import NotFound from './components/notFound';
import Found from './components/found';

function Album({ albums, requestAlbums }) {
  const { id } = useParams();
  const [album, setAlbum] = useState({});

  useEffect(() => {
    if (albums && albums.results) {
      setAlbum(albums.results.find((item) => item.id === id) || {});
    } else {
      requestAlbums();
    }
  }, [albums]);

  return isAlbumFound(album)
    ? <Found album={album} />
    : <NotFound />;
}

function isAlbumFound(obj) {
  return obj
    && Object.keys(obj).length !== 0
    && Object.getPrototypeOf(obj) === Object.prototype;
}

const mapStateToProps = (state) => ({
  albums: state.albums.albums,
});

const mapDispatchToProps = (dispatch) => ({
  requestAlbums: bindActionCreators(getAlbums, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);
