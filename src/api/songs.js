const songs = [
  {
    id: 1,
    title: 'Smooth criminal',
    year: 1987
  },
  {
    id: 2,
    title: 'They dont care about us',
    year: 1995
  },
  {
    id: 3,
    title: 'Uprising',
    year: 2009
  },
  {
    id: 4,
    title: 'In my place',
    year: 2002
  }
];

class SongApi {
  static getAllSongs() {
  return songs;
  }
}
export default SongApi;
