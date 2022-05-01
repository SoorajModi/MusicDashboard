import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAlbums } from '../../api/albums';

function Home({ status, requestAlbums }) {
  useEffect(() => {
    requestAlbums();
  }, [requestAlbums]);

  return (
    <div>
      { status === 'READY' && <span>Hello world</span> }
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
