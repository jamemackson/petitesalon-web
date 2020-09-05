import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LocationsRoute extends Route {
  @service data;

  async model() {
    return this.data.getArtists();
  }

  setupController(controller, model) {
    // @ts-ignore
    super.setupController(...arguments);

    controller.set('artists', model);
  }
}
