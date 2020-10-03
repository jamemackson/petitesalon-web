import Route from '@ember/routing/route';
// import { timeout } from 'ember-concurrency';

export default class IndexRoute extends Route {
  async model() {
    // await timeout(2000);
  }

  afterModel() {
    this._super(...arguments);

    this.metaInfo = {
      author: 'Jame Mackson',
      authorId: 'jamemackson',
      title: 'Petite Salon'
    };
  }
}
