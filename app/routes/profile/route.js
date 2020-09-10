import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProfileRoute extends Route {
  @service data;

  async model({ slug }) {
    return this.data.getArtist(slug);
  }

  afterModel(model, transition) {
    this._super(model, transition);
    this.metaInfo = {
      title: `${model.fullName} | Petite Salon | ${model.locations.join(' | ')}`,
      image: `${model.image}`
    };
  }
}
