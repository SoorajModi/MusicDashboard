import React from 'react';
import uniqid from 'uniqid';
import Album from './album';

function Genre({ albums, title }) {
  return (
    <div className="flex flex-col space-y-3">
      <span className="text-2xl">{title}</span>
      <div className="carousel space-x-4">
        {albums.map((album) => (
          <div className="carousel-item" key={uniqid()}>
            <Album album={album} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Genre;
