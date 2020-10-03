import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { cldnryPath } from '../../helpers/cldnry-path';

export default class ProfileRoute extends Route {
  @service data;

  async model({ slug }) {
    return this.data.getArtist(slug);
  }

  afterModel(model, transition) {
    super.afterModel(model, transition);
    this.metaInfo = {
      title: `${model.name} | Petite Salon | ${model.locations.join(' | ')}`,
      imgSrc: `${cldnryPath(null, { src: model.image, width: 250 })}`,
      description: model.bio.short
    };
    // console.log({ model, meta: this.metaInfo });
  }
}
