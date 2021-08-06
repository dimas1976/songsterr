export type Song = {
  id: number;
  artistName: string;
  songName: string;
};

export type SongFromAPI = {
  id: number;
  type: string;
  title: string;
  artist: {
    id: number;
    type: string;
    nameWithoutThePrefix: string;
    useThePrefix: boolean;
    name: string;
  };
  chordsPresent: boolean;
  tabTypes: string[];
};
