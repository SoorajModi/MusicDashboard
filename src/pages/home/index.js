import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAlbums } from '../../api/albums';
import Genre from './components/genre';

function Home({ status, requestAlbums, albums }) {
  useEffect(() => {
    requestAlbums();
  }, [requestAlbums]);

  return (
    <div>
      { status === 'READY' && <Genre albums={albums.results.splice(0, 20)} title="Test" /> }
      { status === 'FAILED' && <span>Error</span> }
      { status === 'PENDING' && <span>Loading</span> }
    </div>
  );
}

const mapStateToProps = (state) => ({
  albums: state.albums.albums,
  status: state.albums.status,
});

const mapDispatchToProps = (dispatch) => ({
  requestAlbums: bindActionCreators(getAlbums, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
