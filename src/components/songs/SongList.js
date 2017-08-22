import React, {PropTypes} from 'react';
import SongListRow from './SongListRow';

const SongList = ({songs}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Name</th>
        <th>Year</th>
      </tr>
      </thead>
      <tbody>
      {songs.map(song => <SongListRow key = {song.id} song = {song}/>)}
      </tbody>
    </table>
  );
}

export default SongList;
