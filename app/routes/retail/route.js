import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { cldnryPath } from '../../helpers/cldnry-path';

export default class RetailRoute extends Route {
  @service router;

  afterModel(model, transition) {
    super.afterModel(model, transition);
    this.metaInfo = {
      title: `Petite Salon | Retail Product Information`,
      // imgSrc: `${cldnryPath(null, { src: 'features/petite-minneapolis-product-wall', width: 250 })}`,
      imgSrc: `${cldnryPath(null, { src: 'features/feature-product-bowl-randco-davines-panache', width: 250 })}`,
      description:
        'Petite Salon retails R+Co, Davines, Comfort Zone, Innersense and many other high quality lines of hair and skin care products.',
      url: `https://petitesalon.com${this.router.currentURL}`
    };
  }
}
