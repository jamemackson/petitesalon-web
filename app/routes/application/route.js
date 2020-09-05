import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service data;

  async model() {
    return this.data.getArtists();
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
