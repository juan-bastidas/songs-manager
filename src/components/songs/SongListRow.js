import React, {PropTypes} from 'react';
import {Link} from 'react-router';


  const SongListRow = (props) => {

  function handleClickDelete(event){
    props.onDelete(props.song)
  }

  return(
    <tr>
      <td><Link to={'/song/'+ props.song.id}>{props.song.title}</Link></td>
      <td>{props.song.year}</td>
      <td>{props.song.genre}</td>
      <td>{props.song.length}</td>
      <td>
          <button type="button" className="btn btn-default btn-sm" onClick={handleClickDelete}>
          <span className="glyphicon glyphicon-trash"></span>
          </button>
      </td>

    </tr>
  );
}

export default SongListRow;
