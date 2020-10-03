import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service data;
  @service fastboot;
  @service router;
  @service metrics;

  constructor() {
    super(...arguments);
    console.log('application route initializing');
    if (!this.fastboot.isFastBoot) {
      let router = this.router;
      router.on('routeDidChange', () => {
        const page = router.currentURL;
        const title = router.currentRouteName || 'unknown';

        this.metrics.trackPage({ page, title });
      });
    }
  }

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
