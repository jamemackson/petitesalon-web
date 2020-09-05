import Component from '@glimmer/component';

export default class FeaturesSliderItemComponent extends Component {
  goto(route, model) {
    console.log({ route, model });
  }
}
