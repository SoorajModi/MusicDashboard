/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Album({ album }) {
  const navigate = useNavigate();

  return (
    <button type="button" className="card card-compact max-w-sm bg-base-100 w-48" onClick={() => navigate(`/${album.name}`)}>
      <img src={album.artworkUrl100} alt="Album artwork" className="w-full" />
      <div className="flex flex-col w-full text-left">
        <span className="text-lg font-bold">{album.name}</span>
        <span>{album.artistName}</span>
      </div>
    </button>
  );
}

export default Album;
