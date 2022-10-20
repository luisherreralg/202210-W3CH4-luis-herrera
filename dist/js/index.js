import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { SeriesContainer } from './components/series.container.js';
(() => {
    new Header('div.container');
    new Main('div.container');
    new SeriesContainer('main');
})();
