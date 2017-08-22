import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const SongListRow = ({song}) => {
  return(
    <tr>
      <td><a target="_blank">Watch</a></td>
      <td><Link to={'/course/'+ song.id}>{song.title}</Link></td>
      <td>{song.year}</td>
    </tr>
  );
}

export default SongListRow;
