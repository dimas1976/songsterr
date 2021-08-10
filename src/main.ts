import { createSongList } from './components/songsList';
import './style.css';
import { Song } from './types';
import { getSongs } from './utils/api';
import { createElement } from './utils/createElement';

async function run() {
  const firstPortion: Song[] = await getSongs();

  const songsList = createElement('div', {
    className: 'content-section__list',
    childElements: [
      createElement('h3', {
        innerHTML: 'Select an artist!',
      }),
    ],
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
    oninput: () => {
      songsList.innerHTML = '';
    },
    onchange: async () => {
      const searchArtist = input.value;
      const filteredSongs: Song[] = await getSongs(searchArtist);
      const createdSongsList = filteredSongs.map((song) => {
        const listenedSong = createSongList(song);
        // listenedSong.onclick = () => {
        //   location.href = `http://www.songsterr.com/a/wa/song?id=${song.id}`;
        // };
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

  const app = document.querySelector<HTMLDivElement>('#app');

  if (app !== null) {
    app.append(appContainer);
  }
}

run();
