import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uniqid from 'uniqid';
import { getAlbums } from '../../api/albums';

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

  return Object.keys(album).length !== 0
    ? (
      <div className="flex flex-row w-full h-96 justify-center items-center space-x-3 my-20">
        <img src={album.artworkUrl100} alt={`${album.name} album artwork`} className="w-96" />
        <div className="text-center max-w-lg">
          <div className="text-3xl font-bold">{album.name}</div>
          <div className="text-xl">{album.artistName}</div>
          <div className="text-sm space-x-2">{album.genres.map((g) => <span key={uniqid()}>{g.name}</span>)}</div>
          <div className="text-sm">{album.releaseDate.toString().slice(0, 4)}</div>
        </div>
      </div>
    ) : (
      <div className="flex justify-center items-center w-full">
        Album not found
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
