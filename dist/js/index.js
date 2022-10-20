import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { SeriesContainer } from './components/series.container.js';
import { SeriesListPending } from './components/series.pending.js';
import { SeriesListWatched } from './components/series.watched.js';
(() => {
    new Header('div.container');
    new Main('div.container');
    new SeriesContainer('main');
    new SeriesListPending('.series');
    new SeriesListWatched('.series');
})();
