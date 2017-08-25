import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <nav>
      <Link to="/" activeClassName ="active">Home</Link>
      {" | "}
      <Link to="/songs" activeClassName ="active">Songs</Link>
    </nav>
  );
};

export default Header;
