import * as types from './actionTypes';
import SongApi from '../api/songs';

export function createSong(song){
  return { type: types.CREATE_SONG, song}
}

export function loadSongsSucess(songs){
  return {type: types.LOAD_SONGS_SUCCESS, songs}
}

export function loadSongs(){
  let songs = SongApi.getAllSongs();
  return loadSongsSucess(songs);
}
