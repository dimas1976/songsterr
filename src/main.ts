import { createSongList } from './components/songsList';
import './style.css';
import { createElement } from './utils/createElement';

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
      childElements: [
        createElement('input', {
          className: 'main__input',
          placeholder: 'Select an artist',
        }),
        createElement('section', {
          className: 'content-section',
          childElements: [
            createSongList(),
            createElement('div', {
              className: 'content-section__chord',
            }),
          ],
        }),
      ],
    }),
  ],
});

const app = document.querySelector<HTMLDivElement>('#app');

if (app !== null) {
  app.append(appContainer);
}
