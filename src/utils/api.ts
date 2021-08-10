import { Song, SongFromAPI } from '../types';

export async function getSongs(artistName?: string): Promise<Song[]> {
  const response = await fetch(
    `https://www.songsterr.com/a/ra/songs.json?pattern=${
      artistName ? artistName : ''
    }`
  );
  const data: SongFromAPI[] = await response.json();
  const songs: Song[] = data.map((song, index) => {
    if (index < 11) {
      const formattedSong: Song = {
        id: song.id,
        artistName: song.artist.name,
        songName: song.title,
      };
      return formattedSong;
    }
    return;
  });
  return songs;
}
