import { createElement } from '../utils/createElement';
import './songsList.css';

export function createSongList(): HTMLElement {
  return createElement('ul', {
    className: 'song',
    childElements: [
      createElement('li', {
        className: 'song__item',
        innerText: 'Bob Marley',
      }),
      createElement('li', {
        className: 'song__item',
        innerText: 'No Woman No Cry',
      }),
    ],
  });
}
