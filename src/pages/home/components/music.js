/* eslint-disable no-plusplus */
import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import Genre from './genre';

function Music({ albums }) {
  const genres = createGenres(albums.results);

  return (
    <div>
      {
        Object.keys(genres).map((key) => (
          <div key={uniqid()} className="pt-5">
            <Genre albums={genres[key]} title={key} />
          </div>
        ))
      }
    </div>
  );
}

const createGenres = (albums) => {
  const genres = {};

  for (let i = 0; i < albums.length; i++) {
    const album = albums[i];
    const albumGenres = album.genres;

    for (let j = 0; j < albumGenres.length; j++) {
      const genre = albumGenres[j].name;

      if (genres[genre]) {
        genres[genre] = [...genres[genre], album];
      } else {
        genres[genre] = [album];
      }
    }
  }

  return genres;
};

const mapStateToProps = (state) => ({
  albums: state.albums.albums,
});

export default connect(mapStateToProps, null)(Music);
