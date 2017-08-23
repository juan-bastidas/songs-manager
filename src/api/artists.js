const artists = [
  {
    id: 1,
    name: 'Michael Jackson',
    group: false

  },
  {
    id: 2,
    name: 'Cold play',
    group: true
  },
  {
    id: 3,
    name: 'Muse',
    group: true
  }
];

class ArtistApi {
  static getAllArtists() {
  return artists;
  }
}
export default ArtistApi;
