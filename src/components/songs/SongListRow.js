import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';


  const SongListRow = (props) => {

  function handleClickDelete(event){
    props.onDelete(props.song)
  }

  return(
    <tr>
      <td>{props.song.title}</td>
      <td>{props.song.year}</td>
      <td>{props.song.genre}</td>
      <td>{props.song.length}</td>
      <td>
          <button type="button" className="btn btn-default btn-sm" onClick={() => browserHistory.push('/song/'+ props.song.id)}>
          <span className="glyphicon glyphicon-edit"></span>
          </button>
          {" "}
          <button type="button" className="btn btn-default btn-sm" onClick={handleClickDelete}>
          <span className="glyphicon glyphicon-trash"></span>
          </button>
      </td>

    </tr>
  );
}

export default SongListRow;
