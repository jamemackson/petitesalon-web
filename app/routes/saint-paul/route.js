import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { cldnryPath } from '../../helpers/cldnry-path';
export default class SaintPaulRoute extends Route {
  @service data;
  @service router;

  async model() {
    return this.data.getLocationArtists('stp');
  }

  afterModel(model, transition) {
    super.afterModel(model, transition);
    this.metaInfo = {
      title: 'Petite Salon - St Paul',
      imgSrc: `${cldnryPath(null, { src: 'features/petite-saint-paul-aged-front-door', width: 250 })}`,
      description: 'Petite Salon is a high end salon in the Mac/Groveland neighborhood in St. Paul, Minnesota.',
      url: `https://petitesalon.com${this.router.currentURL}`
    };
  }
}
