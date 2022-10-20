import { SERIES } from '../models/series.js';
import { Store } from '../services/storage.js';
import { Component } from './component.js';
export class SeriesListWatched extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.storeService = new Store('Series');
        if (this.storeService.getStore().length === 0) {
            this.series = [...SERIES];
            this.storeService.setStore(this.series);
        }
        else {
            this.series = this.storeService.getStore();
        }
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        setTimeout(() => {
            document
                .querySelectorAll('.icon--delete')
                .forEach((item) => item.addEventListener('click', this.handlerEraser.bind(this)));
        }, 100);
    }
    createTemplate() {
        let template = `
      <section class="series-watched">
        <h3 class="subsection-title">Watched series</h3>
        <p class="info">You have watched XXXX series</p>
        <!--<p class="info">You already have not watched any serie</p>-->
        <ul class="series-list series-list--watched">`;
        this.series.forEach((item) => {
            if (item.watched) {
                template += `
      <li class="serie">
            <img
              class="serie__poster"
              src="${item.poster}"
              alt="${item.name} poster"
            />
            <h4 class="serie__title">${item.name}</h4>
            <p class="serie__info">${item.creator} (${item.year})</p>
            <ul class="score">
              <li class="score__star" id=${item.id}>
                <i class="icon--score fas fa-star" title="1/5"></i>
              </li>
              <li class="score__star" id=${item.id}>
                <i class="icon--score fas fa-star" title="2/5"></i>
              </li>
              <li class="score__star" id=${item.id}>
                <i class="icon--score fas fa-star" title="3/5"></i>
              </li>
              <li class="score__star" id=${item.id}>
                <i class="icon--score fas fa-star" title="4/5"></i>
              </li>
              <li class="score__star" id=${item.id}>
                <i class="icon--score fas fa-star" title="5/5"></i>
              </li>
            </ul>
            <i class="fas fa-times-circle icon--delete" id=${item.id}></i>
          </li>`;
            }
        });
        template += `
    </ul>
      </section>`;
        return template;
    }
    handlerEraser(ev) {
        const deletedID = ev.target.id;
        this.series = this.series.filter((item) => item.id !== +deletedID);
        this.storeService.setStore(this.series);
        this.manageComponent();
    }
}
