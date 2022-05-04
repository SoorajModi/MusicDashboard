import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

  return (
    <div className="flex flex-row w-full h-96 justify-center items-center space-x-3 my-20">
      <img src={album.artworkUrl100} alt={`${album.name} album artwork`} className="w-96" />
      <div className="text-center max-w-lg">
        <div className="text-3xl font-bold">{album.name || 'N/A'}</div>
        <div className="text-xl">{album.artistName || 'N/A'}</div>
        <div className="text-sm space-x-2">{album.genres && album.genres.map((g) => <span>{g.name}</span>)}</div>
        <div className="text-sm">{album.releaseDate && album.releaseDate.toString().slice(0, 4)}</div>
      </div>
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
