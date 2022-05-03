/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Album({ album }) {
  return (
    <div className="card card-compact max-w-sm bg-base-100">
      <figure><img src={album.artworkUrl100} alt="Album artwork" /></figure>
      <div className="card-body">
        <h2 className="card-title">{album.name}</h2>
        <p>{album.artistName}</p>
      </div>
    </div>
  );
}

export default Album;
