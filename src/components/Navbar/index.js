import React from 'react';

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-link normal-case text-xl text-base-content hover:no-underline" href="/">FilmHub Music</a>
      </div>
      <div className="flex-none pr-3">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered rounded-full w-80" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
