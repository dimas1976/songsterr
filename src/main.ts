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
        createElement('div', {
          className: 'content-container',
          childElements: [
            //hier kommt die Songliste,
            createElement('div', {
              className: 'content-container__chord',
            }),
          ],
        }),
      ],
    }),
  ],
});

const app = document.querySelector<HTMLDivElement>('#app');

if (app !== null) {
  app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
}
