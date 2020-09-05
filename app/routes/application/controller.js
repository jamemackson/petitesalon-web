import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default class ApplicationController extends Controller {
  @service router;
  @service data;

  @computed('router.currentRouteName')
  get routeName() {
    return this.router.currentRouteName;
  }
}
