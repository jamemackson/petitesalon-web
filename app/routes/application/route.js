import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service data;
  @service fastboot;

  async model() {
    let isFastBoot = this.fastboot.isFastBoot;

    if (isFastBoot) {
      let resHeaders = this.fastboot.response.headers;
      resHeaders.set('Cache-Control', 'public, max-age=30, stale-if-error=60');
    }

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
