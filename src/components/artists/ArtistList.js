import React, {PropTypes} from 'react';
import ArtistListRow from './ArtistListRow';

const ArtistList = (props) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Country</th>
        <th>Year</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
        {props.artists.map(artist => <ArtistListRow key = {artist.id} artist = {artist} onDelete = {props.onDelete}/>)}
      </tbody>
    </table>
  );
}

export default ArtistList;
