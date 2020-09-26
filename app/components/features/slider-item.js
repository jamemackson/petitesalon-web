import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class FeaturesSliderItemComponent extends Component {
  @service router;

  @action goto(route, model) {
    console.log({ route, model });
    this.router.transitionTo(route);
  }
}
