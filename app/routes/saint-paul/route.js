import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SaintPaulRoute extends Route {
  @service data;
  async model() {
    return this.data.getLocationArtists('stp');
  }

  afterModel() {
    this._super(...arguments);

    this.metaInfo = {
      title: 'Petite Salon - St Paul'
    };
  }
}
