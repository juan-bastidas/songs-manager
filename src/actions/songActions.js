import * as types from './actionTypes';
import SongApi from '../api/songs';

export function loadSongsSuccess(songs){
  return {type: types.LOAD_SONGS_SUCCESS, songs}
}

export function updateCourseSuccess(song) {
  return { type: types.UPDATE_SONG_SUCCESS, song };
}

export function createCourseSuccess(song) {
  return { type: types.CREATE_SONG_SUCCESS, song };
}

export function deleteSong(song) {
  debugger
  return { type: types.DELETE_SONG, song };
}

export function loadSongs(){
  let songs = SongApi.getAllSongs();
  return loadSongsSuccess(songs);
}

export function saveSong(song, dispatch) {
    return  song.id ? updateCourseSuccess(song) :
      createCourseSuccess(song);
}
