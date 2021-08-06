import { Song, SongFromAPI } from '../types';

export async function getSong(): Promise<Song[]> {
  const response = await fetch(
    'https://www.songsterr.com/a/ra/songs.json?pattern=Marley'
  );
  const data: SongFromAPI[] = await response.json();
  const songs: Song[] = data.map((song) => {
    const formattedSong: Song = {
      artistName: song.artist.name,
      songName: song.title,
    };
    return formattedSong;
  });

  return songs;
}
