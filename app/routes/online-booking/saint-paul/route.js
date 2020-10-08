import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class OnlineBookingSaintPaulRoute extends Route {
  @service router;

  model() {
    // this.router.transitionTo('online-booking');
    // TODO: redirect to new online booking url#hash
    // window.location = '/#book-now';
  }
}
