import { ISeries, SERIES } from '../models/series.js';
import { Component } from './component.js';
import { SeriesListPending } from './series.pending.js';
import { SeriesListWatched } from './series.watched.js';

export class SeriesContainer extends Component {
  template: string;
  series: Array<ISeries>;
  watchedSeries: Array<ISeries>;
  nonWatchedSeries: Array<ISeries>;

  constructor(public selector: string) {
    super();
    this.series = [...SERIES];
    this.watchedSeries = this.arrayFilterWatched();
    this.nonWatchedSeries = this.arrayFilterNonWatched();
    this.template = this.createTemplate();
    this.renderAdd(this.selector, this.template);
  }

  createTemplate() {
    let template = `
    <section class="series">
      <h2 class="section-title">Series list</h2>`;
    template += new SeriesListPending('.series', this.watchedSeries);
    // template += new SeriesListWatched('.series', this.nonWatchedSeries);

    return (template += `</section>`);
  }

  arrayFilterWatched() {
    const watchedArr = this.series.filter((item) => item.watched === true);
    return watchedArr;
  }

  arrayFilterNonWatched() {
    const nonWatchedArr = this.series.filter((itme) => {
      itme.watched === false;
    });
    return nonWatchedArr;
  }
}
