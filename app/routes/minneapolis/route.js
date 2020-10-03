import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class MinneapolisRoute extends Route {
  @service data;
  async model() {
    return this.data.getLocationArtists('mpls');
  }

  afterModel(model, transition) {
    this._super(model, transition);

    this.metaInfo = {
      title: `Minneapolis | Petite Salon`
    };
  }
}
