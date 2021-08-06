import { createSongList } from './components/songsList';
import './style.css';
import { Song } from './types';
import { getSong } from './utils/api';
import { createElement } from './utils/createElement';

// const songs: Song[] = await getSong();
// const songsArr = songs.map((song) => createSongList(song));

const songsList = createElement('div', {
  className: 'content-section__list',
});

const content = createElement('section', {
  className: 'content-section',
  childElements: [
    songsList,
    createElement('div', {
      className: 'content-section__chord',
    }),
  ],
});

const input = createElement('input', {
  className: 'main__input',
  placeholder: 'Select an artist',
  oninput: async () => {
    songsList.innerHTML = '';
    const searchArtist = input.value;
    const filteredSongs: Song[] = await getSong(searchArtist);
    const createdSongsList = filteredSongs.map((song) => {
      const listenedSong = createSongList(song);
      listenedSong.onclick = () => {
        location.href = `http://www.songsterr.com/a/wa/song?id=${song.id}`;
      };
      return listenedSong;
    });
    songsList.append(...createdSongsList);
  },
});

const appContainer = createElement('div', {
  className: 'appContainer',
  childElements: [
    createElement('header', {
      className: 'header',
      childElements: [
        createElement('h1', {
          className: 'header__heading',
          innerText: 'Let`s rock',
        }),
      ],
    }),
    createElement('main', {
      className: 'main',
      childElements: [input, content],
    }),
  ],
});

function onHandler() {
  console.log('huhu');
}

const app = document.querySelector<HTMLDivElement>('#app');

if (app !== null) {
  app.append(appContainer);
}
