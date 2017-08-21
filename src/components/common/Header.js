import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return(
    <nav>
      <IndexLink to="/" activeClassName ="active">Home</IndexLink>
      {"|"}
      <Link to="/songs" activeClassName ="active">Songs</Link>
    </nav>
  )
}

export default Header;
