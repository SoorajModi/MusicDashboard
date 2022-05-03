import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAlbums } from '../../api/albums';

function Album({ albums }) {
  const { id } = useParams();
  let album = albums.results.find((item) => item.id === id);

  useEffect(() => {
    album = albums.results.find((item) => item.id === id);
  }, [albums]);

  return (
    <div>
      {album.name}
    </div>
  );
}

const mapStateToProps = (state) => ({
  albums: state.albums.albums,
});

const mapDispatchToProps = (dispatch) => ({
  requestAlbums: bindActionCreators(getAlbums, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);
