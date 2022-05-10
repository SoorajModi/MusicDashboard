import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function Navbar({ albums }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (albums.results && albums.results.length > 0) {
      albums.results.map((album) => setData(data + [{ key: album.id, value: album.name }]));
    }
  }, [albums]);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-link normal-case text-xl text-base-content hover:no-underline" href="/">FilmHub Music</a>
      </div>
      <div className="flex-none pr-3">
        <div className="form-control">
          <input type="search" placeholder="Search" className="input input-bordered rounded-full w-80" />
          {/*  Search component would go here */}
          {/* <ReactSearchBox */}
          {/*  placeholder="Search" */}
          {/*  data={data} */}
          {/*  onClick={(album) => navigate(`/album/${album.id}`)} */}
          {/* /> */}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  albums: state.albums.albums,
});

export default connect(mapStateToProps, null)(Navbar);
