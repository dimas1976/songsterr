import { Song } from '../types';
import { createElement } from '../utils/createElement';
import './songsList.css';

export function createSongList({ artistName, songName }: Song): HTMLElement {
  return createElement('ul', {
    className: 'song',
    childElements: [
      createElement('li', {
        className: 'song__item',
        innerText: artistName,
      }),
      createElement('li', {
        className: 'song__item',
        innerText: songName,
      }),
    ],
  });
}
