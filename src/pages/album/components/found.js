import React from 'react';
import uniqid from 'uniqid';

function Found({ album }) {
  return (
    <div className="flex flex-row w-full h-96 justify-center items-center space-x-3 my-20">
      <img src={album.artworkUrl100} alt={`${album.name} album artwork`} className="w-96" />
      <div className="text-center max-w-lg">
        <div className="text-3xl font-bold">{album.name}</div>
        <div className="text-xl">{album.artistName}</div>
        <div className="text-sm space-x-2">{album.genres.map((g) => <span key={uniqid()}>{g.name}</span>)}</div>
        <div className="text-sm">{album.releaseDate.toString().slice(0, 4)}</div>
      </div>
    </div>
  );
}

export default Found;
