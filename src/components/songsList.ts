import { Song } from '../types';
import { createElement } from '../utils/createElement';
import './songsList.css';

export function createSongList({
  artistName,
  songName,
  id,
}: Song): HTMLElement {
  return createElement('ul', {
    className: 'song',
    childElements: [
      createElement('li', {
        className: 'song__item',
        innerText: artistName,
      }),
      createElement('li', {
        className: 'song__item',
        // innerText: songName,
        childElements: [
          createElement('a', {
            href: `http://www.songsterr.com/a/wa/song?id=${id}`,
            innerText: songName,
          }),
        ],
      }),
    ],
  });
}
