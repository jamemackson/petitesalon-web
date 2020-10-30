import Component from '@glimmer/component';
import { computed } from '@ember/object';

export default class ArtistBioComponent extends Component {
  @computed('args.artist.bio.long')
  get bio() {
    if (typeof this.args.artist.bio.long === 'string') {
      return this.args.artist.bio.long;
    }
    return this.args.artist.bio.long.join('\n');
  }
}
