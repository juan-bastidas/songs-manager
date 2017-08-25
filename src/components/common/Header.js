import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <nav>
      <Link to="/" activeClassName ="active">Home</Link>
      {" | "}
      <Link to="/songs" activeClassName ="active">Songs</Link>
      {" | "}
      <Link to="/artists" activeClassName ="active">Artists</Link>
    </nav>
  );
};

export default Header;
