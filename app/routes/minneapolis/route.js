import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { cldnryPath } from '../../helpers/cldnry-path';

export default class MinneapolisRoute extends Route {
  @service data;
  @service router;

  async model() {
    return this.data.getLocationArtists('mpls');
  }

  afterModel(model, transition) {
    super.afterModel(model, transition);
    this.metaInfo = {
      title: `Minneapolis | Petite Salon`,
      imgSrc: `${cldnryPath(null, { src: 'features/petite-saint-paul-aged-front-door', width: 250 })}`,
      description: 'Petite Salon is a high end salon in the Mac/Groveland neighborhood in St. Paul, Minnesota.',
      url: `https://petitesalon.com${this.router.currentURL}`
    };
  }
}
